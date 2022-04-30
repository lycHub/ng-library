import { Rule } from '@angular-devkit/schematics';
export interface HelloWorldSchema {
    name: string;
    project?: string;
}
export declare function helloWorld(_options: HelloWorldSchema): Rule;
