// custom definition to allow type-safe use of the asyncblock-rewritten functions
declare module "fs" {
  function readFile(filename: string): AsyncFunction<string>;
}
