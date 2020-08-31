export function assert (condition, message) {
  if (!condition) {
    throw message || `Assertion failed, value was ${JSON.stringify(condition)}`
  }
  return condition
}

export function debug (what) {
  console.log(what)
  return what
}
