"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const testing_1 = require("@angular-devkit/architect/testing");
const core_1 = require("@angular-devkit/core");
const fs_1 = require("fs");
describe('Copy File Builder', () => {
    let architect;
    let architectHost;
    beforeEach(async () => {
        const registry = new core_1.schema.CoreSchemaRegistry();
        registry.addPostTransform(core_1.schema.transforms.addUndefinedDefaults);
        // TestingArchitectHost() takes workspace and current directories.
        // Since we don't use those, both are the same in this case.
        architectHost = new testing_1.TestingArchitectHost(__dirname, __dirname);
        architect = new architect_1.Architect(architectHost, registry);
        // This will either take a Node package name, or a path to the directory
        // for the package.json file.
        await architectHost.addBuilderFromPackage('..');
    });
    it('can copy files', async () => {
        // A "run" can have multiple outputs, and contains progress information.
        const run = await architect.scheduleBuilder('@example/copy-file:copy', {
            source: 'package.json',
            destination: 'package-copy.json',
        });
        // The "result" member (of type BuilderOutput) is the next output.
        const output = await run.result;
        // Stop the builder from running. This stops Architect from keeping
        // the builder-associated states in memory, since builders keep waiting
        // to be scheduled.
        await run.stop();
        // Expect that the copied file is the same as its source.
        const sourceContent = await fs_1.promises.readFile('package.json', 'utf8');
        const destinationContent = await fs_1.promises.readFile('package-copy.json', 'utf8');
        expect(destinationContent).toBe(sourceContent);
    });
});
