import { useEffect, useState } from "react";
import { getLatestRelease } from "../services/github";

export function useLatestRelease() {
  const [state, setState] = useState({ status: "loading", release: null, error: "" });

  useEffect(() => {
    const controller = new AbortController();
    getLatestRelease(controller.signal)
      .then((release) => setState({ status: release ? "ready" : "empty", release, error: "" }))
      .catch((error) => {
        if (error.name !== "AbortError") setState({ status: "error", release: null, error: error.message });
      });
    return () => controller.abort();
  }, []);

  return state;
}
