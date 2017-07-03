export function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]';
}
export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}
export function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}
export function isBoolean(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}
export function isUndefined(value) {
  return Object.prototype.toString.call(value) === '[object Undefined]';
}
export function isNull(value) {
  return Object.prototype.toString.call(value) === '[object Null]';
}
export function isSymbol(value) {
  return Object.prototype.toString.call(value) === '[object Symbol]';
}
export function isObject(value) {
  return (
    Object.prototype.toString.call(value) === '[object Object]'
    ||
    // if it isn't a primitive value, then it is a common object
    (
      !isNumber(value) &&
      !isString(value) &&
      !isBoolean(value) &&
      !isArray(value) &&
      !isNull(value) &&
      !isFunction(value) &&
      !isUndefined(value) &&
      !isSymbol(value)
    )
  );
}
export function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]';
}
export function isPlainObject(obj) {
  let hasOwn = Object.prototype.hasOwnProperty;
  // Must be an Object.
  if (!obj || typeof obj !== 'object' || obj.nodeType) {
    return false;
  }
  try {
    if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
      return false;
    }
  } catch (e) {
    return false;
  }
  let key;
  for (key in obj) {}
  return key === undefined || hasOwn.call(obj, key);
}
export function isRegExp(value) {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}

