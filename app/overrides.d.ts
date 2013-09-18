// custom definition to allow type-safe use of the asyncblock-rewritten functions
declare module "fs" {
  function readFile(filename: string): AsyncFunction<string>;
}

declare module "internal_lib" {
  function foo(): AsyncFunction<string>;
}
