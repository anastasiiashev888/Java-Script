export function saveCalls(fn) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return fn.apply(this, args);
  }
  withMemory.calls = [];
  return withMemory;
}
