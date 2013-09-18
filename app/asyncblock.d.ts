interface AsyncFunction<T> {
  sync(): T;
}

interface Asyncblock {
  (fn: () => void, done?: (err: any, result?: any) => void, options?: Object): void;
  enableTransform(module?: Object): boolean;
}

declare var asyncblock: Asyncblock;

declare module "asyncblock" {
  export = asyncblock;
}
