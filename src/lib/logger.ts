"use client";
import jsLogger from "js-logger";
import { useEffect } from "react";

// Logger.TRACE = defineLogLevel(1, 'TRACE');
// Logger.DEBUG = defineLogLevel(2, 'DEBUG');
// Logger.INFO = defineLogLevel(3, 'INFO');
// Logger.TIME = defineLogLevel(4, 'TIME');
// Logger.WARN = defineLogLevel(5, 'WARN');
// Logger.ERROR = defineLogLevel(8, 'ERROR');
// Logger.OFF = defineLogLevel(99, 'OFF');

type LogLevel = "TRACE" | "DEBUG" | "INFO" | "TIME" | "WARN" | "ERROR" | "OFF";

function Logger({ level }: { level?: LogLevel }) {
  function getLevel() {
    switch (level) {
      case "TRACE":
        return 1;
      case "DEBUG":
        return 2;
      case "INFO":
        return 3;
      case "TIME":
        return 4;
      case "WARN":
        return 5;
      case "ERROR":
        return 8;
      case "OFF":
        return 99;
      default:
        throw new Error("Unknown level " + level);
    }
  }
  useEffect(() => {
    jsLogger.useDefaults();
    if (level) {
      jsLogger.setLevel({ value: getLevel(), name: level });
    }
    window.logger = jsLogger;
  }, [level]);
  return null;
}

export default Logger;
