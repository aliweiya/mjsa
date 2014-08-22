  // Aliases
  var Observable = Rx.Observable,
    observableProto = Observable.prototype,
    AnonymousObservable = Rx.AnonymousObservable,
    observableConcat = Observable.concat,
    observableDefer = Observable.defer,
    observableEmpty = Observable.empty,
    disposableEmpty = Rx.Disposable.empty,
    CompositeDisposable = Rx.CompositeDisposable,
    SerialDisposable = Rx.SerialDisposable,
    SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
    Enumerator = Rx.internals.Enumerator,
    Enumerable = Rx.internals.Enumerable,
    enumerableFor = Enumerable.forEach,
    immediateScheduler = Rx.Scheduler.immediate,
    currentThreadScheduler = Rx.Scheduler.currentThread,
    slice = Array.prototype.slice,
    AsyncSubject = Rx.AsyncSubject,
    Observer = Rx.Observer,
    inherits = Rx.internals.inherits,
    addProperties = Rx.internals.addProperties,
    noop = Rx.helpers.noop,
    isPromise = Rx.helpers.isPromise,
    observableFromPromise = Observable.fromPromise;

  // Utilities
  function argsOrArray(args, idx) {
    return args.length === 1 && Array.isArray(args[idx]) ?
      args[idx] :
      slice.call(args);
  }
