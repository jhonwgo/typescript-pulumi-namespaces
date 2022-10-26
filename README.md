# TypeScript Pulumi - Namespaces Example

This is a simple example of how to use TypeScript namespaces to organize your Pulumi code.

based on:

- [typescript-namespace](https://github.com/jhonwgo/typescript-namespace) TypeScript Namespaces Example.

## Resources
- [DevTools](https://github.com/jhonwgo/devtools) Docker Image for Development.


## Getting Started

1. Start DevTools from docker image, see [DevTools](https://github.com/jhonwgo/devtools) for more information.
2. Enter to the container.
3. Clone this repository.
4. Enter to the project folder.
5. Install dependencies.
```bash
npm install
```
6. Run the project with Pulumi.
```bash
pulumi up
```
```bash
Diagnostics:
  pulumi:pulumi:Stack (UpdateScheduler-dev):
    error: Running program '/home/desarrollo/Proyectos/ampliffy/Tareas/TypeScript-pulumi-namespace' failed with an unhandled exception:
    ReferenceError: Validation is not defined
        at Object.<anonymous> (/home/desarrollo/Proyectos/ampliffy/Tareas/TypeScript-pulumi-namespace/index.ts:10:30)
        at Module._compile (node:internal/modules/cjs/loader:1155:14)
        at Module.m._compile (/home/desarrollo/Proyectos/ampliffy/Tareas/TypeScript-pulumi-namespace/node_modules/ts-node/src/index.ts:439:23)
        at Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
        at Object.require.extensions.<computed> [as .ts] (/home/desarrollo/Proyectos/ampliffy/Tareas/TypeScript-pulumi-namespace/node_modules/ts-node/src/index.ts:442:12)
        at Module.load (node:internal/modules/cjs/loader:1033:32)
        at Function.Module._load (node:internal/modules/cjs/loader:868:12)
        at Module.require (node:internal/modules/cjs/loader:1057:19)
        at require (node:internal/modules/cjs/helpers:103:18)
        at Object.<anonymous> (/home/desarrollo/Proyectos/ampliffy/Tareas/TypeScript-pulumi-namespace/node_modules/@pulumi/cmd/run/run.ts:373:33)

```
7. Run the project with tsc.
```bash
tsc --outFile sample.js src/*.ts index.ts
node sample.js
```
```bash
"You" - Invalid ZIP code
"You" - Valid Letters only
"53454" - Valid ZIP code
"53454" - Invalid Letters only
"Hello" - Invalid ZIP code
"Hello" - Valid Letters only
```
