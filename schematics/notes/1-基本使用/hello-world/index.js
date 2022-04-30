"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function helloWorld(_options) {
    return (_tree, _context) => {
        // 模板使用任何ejs语法
        const sourceTemplates = (0, schematics_1.url)('./files'); // 使用範本
        const sourceParametrizedTemplates = (0, schematics_1.apply)(sourceTemplates, [
            (0, schematics_1.template)(Object.assign(Object.assign(Object.assign({}, _options), core_1.strings), { addExclamation }))
        ]);
        return (0, schematics_1.mergeWith)(sourceParametrizedTemplates);
    };
}
exports.helloWorld = helloWorld;
function addExclamation(value) {
    return value + '!';
}
//# sourceMappingURL=index.js.map