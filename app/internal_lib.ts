/// <reference path='asyncblock.d.ts' />

export function foo(callback?: (err: any, result: string) => void): AsyncFunction<string> {
  callback(null, 'foo!');
  return;
}
