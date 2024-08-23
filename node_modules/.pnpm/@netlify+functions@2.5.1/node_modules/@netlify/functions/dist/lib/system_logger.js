"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemLogger = exports.LogLevel = void 0;
const process_1 = require("process");
const systemLogTag = '__nfSystemLog';
const serializeError = (error) => {
    const cause = error?.cause instanceof Error ? serializeError(error.cause) : error.cause;
    return {
        error: error.message,
        error_cause: cause,
        error_stack: error.stack,
    };
};
// eslint pretends there's a different enum at the same place - it's wrong!
// eslint-disable-next-line no-shadow
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Log"] = 2] = "Log";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class SystemLogger {
    fields;
    logLevel;
    constructor(fields = {}, logLevel = LogLevel.Log) {
        this.fields = fields;
        this.logLevel = logLevel;
    }
    doLog(logger, message) {
        if (process_1.env.NETLIFY_DEV && !process_1.env.NETLIFY_ENABLE_SYSTEM_LOGGING) {
            return;
        }
        logger(systemLogTag, JSON.stringify({ msg: message, fields: this.fields }));
    }
    log(message) {
        if (this.logLevel > LogLevel.Log) {
            return;
        }
        this.doLog(console.log, message);
    }
    debug(message) {
        if (this.logLevel > LogLevel.Debug) {
            return;
        }
        this.doLog(console.debug, message);
    }
    error(message) {
        if (this.logLevel > LogLevel.Error) {
            return;
        }
        this.doLog(console.error, message);
    }
    withLogLevel(level) {
        return new SystemLogger(this.fields, level);
    }
    withFields(fields) {
        return new SystemLogger({
            ...this.fields,
            ...fields,
        }, this.logLevel);
    }
    withError(error) {
        const fields = error instanceof Error ? serializeError(error) : { error };
        return this.withFields(fields);
    }
}
exports.systemLogger = new SystemLogger();
