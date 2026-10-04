import { useCallback, useRef, useState } from "react";
import { commandRegistry } from "../terminal/commands.jsx";

const MAX_HISTORY = 50;
const MAX_INPUT_LENGTH = 100;

function getLongestCommonPrefix(strings) {
  if (strings.length === 0) return "";
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    while (!strings[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

export function useTerminal({ reducedMotion } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: "init-1",
      type: "system",
      content:
        "vikranth.dev terminal [v2.0.0] — type 'help' for commands, 'clear' to clear.",
    },
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const draftRef = useRef("");

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const clear = useCallback(() => {
    setEntries([]);
  }, []);

  const executeCommand = useCallback(
    (rawInput) => {
      const text = String(rawInput || "").slice(0, MAX_INPUT_LENGTH).trim();
      if (!text) return;

      // Add to command history
      setHistory((prev) => [...prev, text].slice(-MAX_HISTORY));
      setHistoryIndex(-1);
      draftRef.current = "";

      const parts = text.split(/\s+/);
      let cmdKey = parts[0].toLowerCase();
      let args = parts.slice(1);

      if (
        text.toLowerCase() === "sudo hire-me" ||
        (cmdKey === "sudo" && args.join(" ").toLowerCase() === "hire-me")
      ) {
        cmdKey = "sudo hire-me";
        args = [];
      }

      const inputEntry = {
        id: `in-${Date.now()}-${Math.random()}`,
        type: "input",
        command: text,
      };

      const command = commandRegistry[cmdKey];

      if (!command) {
        const errorEntry = {
          id: `out-${Date.now()}-${Math.random()}`,
          type: "error",
          content: `command not found: "${text}". Try 'help'`,
        };
        setEntries((prev) =>
          [...prev, inputEntry, errorEntry].slice(-MAX_HISTORY),
        );
        return;
      }

      const result = command.execute(args, {
        reducedMotion,
        close,
        clear,
      });

      if (result?.action === "clear") {
        clear();
        return;
      }

      const outputEntry = {
        id: `out-${Date.now()}-${Math.random()}`,
        type: "output",
        content: result?.output ?? result,
      };

      setEntries((prev) =>
        [...prev, inputEntry, outputEntry].slice(-MAX_HISTORY),
      );
    },
    [clear, close, reducedMotion],
  );

  const getAutocomplete = useCallback((currentInput) => {
    const raw = String(currentInput || "").slice(0, MAX_INPUT_LENGTH);
    const trimmed = raw.trim().toLowerCase();
    if (!trimmed) return null;

    const commandNames = Object.keys(commandRegistry);
    const matches = commandNames.filter((name) => name.startsWith(trimmed));

    if (matches.length === 1) {
      return { match: matches[0], matches };
    }
    if (matches.length > 1) {
      const common = getLongestCommonPrefix(matches);
      return { match: common || trimmed, matches };
    }
    return null;
  }, []);

  const navigateHistory = useCallback(
    (direction, currentInput) => {
      if (history.length === 0) return currentInput;

      if (direction === "up") {
        if (historyIndex === -1) {
          draftRef.current = currentInput;
          const newIndex = history.length - 1;
          setHistoryIndex(newIndex);
          return history[newIndex];
        }
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          return history[newIndex];
        }
        return history[0];
      }

      if (direction === "down") {
        if (historyIndex === -1) {
          return currentInput;
        }
        if (historyIndex < history.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          return history[newIndex];
        }
        setHistoryIndex(-1);
        return draftRef.current;
      }

      return currentInput;
    },
    [history, historyIndex],
  );

  const resetHistoryNav = useCallback(() => {
    setHistoryIndex(-1);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
    clear,
    entries,
    setEntries,
    executeCommand,
    getAutocomplete,
    navigateHistory,
    resetHistoryNav,
  };
}

export default useTerminal;
