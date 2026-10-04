import { useCallback, useRef, useState } from "react";

const DEFAULT_BASE = "http://127.0.0.1:8765";

function apiBase() {
  return (import.meta.env.VITE_JLAI_API_URL || DEFAULT_BASE).replace(/\/$/, "");
}

export function useJlaiStream() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const controllerRef = useRef(null);

  const stop = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setLoading(false);
    setStatus("");
  }, []);

  const ask = useCallback(async ({ question, history, onStart, onDelta, onDone, onError }) => {
    stop();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setStatus("Pensando…");
    onStart?.();

    try {
      const response = await fetch(`${apiBase()}/api/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/x-ndjson" },
        body: JSON.stringify({ question, history }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        let message = "A JLAI não conseguiu responder agora.";
        try {
          const data = await response.json();
          message = data.detail || data.error || message;
        } catch {}
        throw new Error(message);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim()) continue;
          const event = JSON.parse(line);
          if (event.type === "status") setStatus(event.text || "Pensando…");
          if (event.type === "delta") onDelta?.(event.text || "");
          if (event.type === "done") onDone?.(event);
        }
        if (done) break;
      }
    } catch (error) {
      if (error?.name !== "AbortError") onError?.(error);
    } finally {
      controllerRef.current = null;
      setLoading(false);
      setStatus("");
    }
  }, [stop]);

  return { ask, stop, loading, status };
}
