import { useCallback, useEffect, useRef, useState } from "react";

import { getLatestRelease } from "../services/github";

const INITIAL_STATE = {
  status: "idle",
  release: null,
  error: "",
  updatedAt: null,
};

/*
status possíveis:

idle
loading
refreshing
ready
empty
error
*/

export function useLatestRelease(options = {}) {
  const {
    enabled = true,

    cacheTime = 5 * 60 * 1000,

    timeout = 10_000,
  } = options;

  const controllerRef = useRef(null);

  const [state, setState] = useState(INITIAL_STATE);

  const load = useCallback(
    async ({ force = false } = {}) => {
      if (!enabled) {
        return null;
      }

      /*
        Cancela consulta anterior.

        Isso evita duas requisições competindo
        caso refresh seja clicado rapidamente.
        */
      controllerRef.current?.abort();

      const controller = new AbortController();

      controllerRef.current = controller;

      setState((previous) => ({
        ...previous,

        status: previous.release ? "refreshing" : "loading",

        error: "",
      }));

      try {
        const release = await getLatestRelease(controller.signal, {
          force,
          cacheTime,
          timeout,
        });

        if (controller.signal.aborted) {
          return null;
        }

        if (!release) {
          setState({
            status: "empty",
            release: null,
            error: "",
            updatedAt: new Date(),
          });

          return null;
        }

        setState({
          status: "ready",

          release,

          error: "",

          updatedAt: new Date(),
        });

        return release;
      } catch (error) {
        if (controller.signal.aborted || error?.name === "AbortError") {
          return null;
        }

        setState((previous) => ({
          status: "error",

          /*
            Se já existia uma versão válida,
            mantém ela visível.

            Assim um erro temporário não faz
            a interface inteira desaparecer.
            */
          release: previous.release,

          error: error?.message || "Não foi possível consultar a versão atual.",

          updatedAt: previous.updatedAt,
        }));

        return null;
      }
    },
    [enabled, cacheTime, timeout],
  );

  /*
  Atualização manual ignorando cache.
  */
  const refresh = useCallback(() => {
    return load({
      force: true,
    });
  }, [load]);

  /*
  Consulta inicial.
  */
  useEffect(() => {
    if (!enabled) {
      setState(INITIAL_STATE);

      return undefined;
    }

    load();

    return () => {
      controllerRef.current?.abort();
    };
  }, [enabled, load]);

  return {
    ...state,

    refresh,

    isIdle: state.status === "idle",

    isLoading: state.status === "loading",

    isRefreshing: state.status === "refreshing",

    isReady: state.status === "ready",

    isEmpty: state.status === "empty",

    isError: state.status === "error",

    hasRelease: Boolean(state.release),
  };
}
