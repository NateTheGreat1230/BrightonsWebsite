"use strict";
// this file is exported as @netlify/functions/internal,
// and only meant for consumption by Netlify Teams.
// While we try to adhere to semver, this file is not considered part of the public API.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.systemLogger = void 0;
var system_logger_js_1 = require("./lib/system_logger.js");
Object.defineProperty(exports, "systemLogger", { enumerable: true, get: function () { return system_logger_js_1.systemLogger; } });
Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function () { return system_logger_js_1.LogLevel; } });
