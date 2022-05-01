"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const fs_1 = require("fs");
exports.default = (0, architect_1.createBuilder)(copyFileBuilder);
async function copyFileBuilder(options, context) {
    const targetPesc = (0, architect_1.targetFromTargetString)((options.destination));
    console.log('targetPesc>>>>>>>', targetPesc);
    context.reportStatus('coping>>>>');
    try {
        await fs_1.promises.copyFile(options.source, options.destination);
    }
    catch (err) {
        context.logger.error('Failed to copy file.');
        return {
            success: false,
            error: err.message,
        };
    }
    context.reportStatus('Done.');
    return { success: true };
}
