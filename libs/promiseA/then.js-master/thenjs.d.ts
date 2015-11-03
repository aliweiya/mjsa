declare var Thenjs: Thenjs.ThenjsConstructor;

declare module Thenjs {

  interface ThenjsConstructor {
   /**
    * start: Function，function (cont) {}, 即 thunk 函数（见下面解释），或者 Promise 对象，或者 Thenjs 对象，或者其他值。
    * debug: Boolean 或 Function，可选，开启调试模式，将每一个链的运行结果用 debug 函数处理，如果debug为非函数真值，则调用 console.log，下同
    */
    (start?: startFn, debug?: Boolean): ThenjsProto;
    each: Ieach<any>,
    eachSeries: IeachSeries<any>,
    parallel: Iparallel,
    series: Iseries,
    parallelLimit: IparallelLimit,
    eachLimit: IeachLimit<any>,
    nextTick: InextTick,
    defer: Idefer,
    onerror: Ionerror
  }

  interface ThenjsProto {
    each: Ieach<any>,
    eachSeries: IeachSeries<any>,
    parallel: Iparallel,
    series: Iseries,
    parallelLimit: IparallelLimit,
    eachLimit: IeachLimit<any>,
    then(successCallback?: (cont?: startFn, ...results: any[]) => any, errorCallback?: (cont?: startFn, error?: Error) => any): ThenjsProto,
    fin(finallyHandler: (cont?: startFn, error?: Error, ...results: any[]) => any | startFn): ThenjsProto,
    finally(finallyHandler: (cont?: startFn, error?: Error, ...results: any[]) => any | startFn): ThenjsProto,
    fail(errorHandler: (cont?: startFn, error?: Error) => any | startFn): ThenjsProto,
    catch(errorHandler: (cont?: startFn, error?: Error) => any | startFn): ThenjsProto,
    toThunk(): Thunk
  }

  interface Ieach<T> {
    (array: T[] | IArrayLike<T>, iterator: (cont?: startFn, value?: T, index?: Number, array?: T[] | IArrayLike<T>) => any, debug?: Boolean): ThenjsProto
  }

  interface IeachSeries<T> {
    (array: T[] | IArrayLike<T>, iterator: (cont?: startFn, value?: T, index?: Number, array?: T[] | IArrayLike<T>) => any, debug?: Boolean): ThenjsProto,
  }

  interface Iparallel {
    (tasksArray: Thunk[], debug?: Boolean): ThenjsProto
  }

  interface Iseries {
    (tasksArray: Thunk[]): ThenjsProto
  }

  interface IparallelLimit {
    (tasksArray: Thunk[], limit: Number, debug?: Boolean): ThenjsProto
  }

  interface IeachLimit<T> {
    (array: T[] | IArrayLike<T>, iterator: (cont?: startFn, value?: T, index?: Number, array?: T[] | IArrayLike<T>) => any, limit: Number, debug?: Boolean): ThenjsProto
  }

  interface startFn {
    (...args: any[]): Thunk | ThenjsConstructor | IPromiseLike<any> | IPromise<any> | Function | any
  }

  interface Thunk {
    (callback: (error?: Error, result?: any) => any): any
  }

  interface InextTick {
    (callback: (...args: any[]) => any, ...args: any[]): any
  }

  interface Idefer {
    (errorHandler: (error: Error) => any, callback: (...args: any[]) => any, ...args: any[]): any
  }

  interface Ionerror {
    (error: Error): void
  }

  interface IPromiseLike<T> {
   /**
    * Attaches callbacks for the resolution and/or rejection of the Promise.
    * @param onfulfilled The callback to execute when the Promise is resolved.
    * @param onrejected The callback to execute when the Promise is rejected.
    * @returns A Promise for the completion of which ever callback is executed.
    */
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromiseLike<TResult>, onrejected?: (reason: any) => TResult | IPromiseLike<TResult>): IPromiseLike<TResult>;
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromiseLike<TResult>, onrejected?: (reason: any) => void): IPromiseLike<TResult>;
  }

 /**
  * Represents the completion of an asynchronous operation
  */
  interface IPromise<T> {
   /**
    * Attaches callbacks for the resolution and/or rejection of the Promise.
    * @param onfulfilled The callback to execute when the Promise is resolved.
    * @param onrejected The callback to execute when the Promise is rejected.
    * @returns A Promise for the completion of which ever callback is executed.
    */
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromiseLike<TResult>, onrejected?: (reason: any) => TResult | IPromiseLike<TResult>): IPromise<TResult>;
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromiseLike<TResult>, onrejected?: (reason: any) => void): IPromise<TResult>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch(onrejected?: (reason: any) => T | IPromiseLike<T>): IPromise<T>;
  }

  interface IArrayLike<T> {
    length: number;
    [n: number]: T;
  }
}
