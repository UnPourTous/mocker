/**
 * Created by erichua on 16/05/2017.
 */
const numeral = require('numeral')
const _ = require('lodash')
const RandExp = require('randexp')

class TPNumber {
  static name = 'number'

  name () {
    return TPNumber.name
  }

  constructor () {
    this._fixValue = null
    this._min = 0
    this._max = 1000000 // default max
    this._format = '0.00'
  }

  fixValue (value) {
    if (!_.isNumber(value)) {
      throw new Error('fixValue should be a number')
    }
    this._fixValue = value
    return this
  }

  format (format) {
    this._format = format
    return this
  }

  range (min, max) {
    if (min > max) {
      throw new Error('min should smaller than max')
    }
    if (_.isNumber(min)) {
      this._min = min
    }
    if (_.isNumber(max)) {
      this._max = max
    }
    return this
  }

  random () {
    if (this._fixValue && _.isNumber(this._fixValue)) {
      return this._fixValue
    }

    const randomValue = (this._max - this._min) * Math.random() + this._min
    if (this._format) {
      return numeral(randomValue).format(this._format)
    }
    return randomValue
  }
}

class TPString {
  static name = 'string'

  name () {
    return TPString.name
  }

  constructor () {
    this._fixValue = null
    this._minLength = 0 // default min length
    this._maxLength = 10 // default max length
    this._regExp = null
  }

  fixValue (value) {
    if (!_.isString(value)) {
      throw new Error('fixValue should be a number')
    }
    this._fixValue = value
    return this
  }

  range (minLength, maxLength) {
    if (!_.isNumber(maxLength)) {
      throw new Error('maxLength should be a number')
    }
    this._minLength = minLength
    this._maxLength = maxLength
    return this
  }

  regExp (regExp) {
    if (!_.isRegExp(regExp)) {
      throw new Error('regExp should be a RegExp object')
    }
    this._regExp = regExp
    return this
  }

  random () {
    if (this._regExp) {
      return new RandExp(this._regExp).gen()
    } else {
      return new RandExp(`\\w{${this._minLength},${this._maxLength}}`).gen()
    }
  }
}

class TPBoolean {
  static name = 'boolean'

  name () {
    return TPBoolean.name
  }

  fixValue (value) {
    if (!_.isBoolean(value)) {
      throw new Error('fixValue should be a boolean')
    }
    this._fixValue = value
    return this
  }

  random () {
    return (parseInt(Math.random() * 100)) % 2
  }
}

class TPEnum {
  static TPEnum = 'enum'

  name () {
    return TPEnum.name
  }

  constructor (enumVals) {
    if (!_.isArray(enumVals)) {
      throw new Error('enumVals must be a array')
    }
    this._enumVals = enumVals
  }

  random () {
    const index = parseInt(Math.random() * this._enumVals.length)
    return this._enumVals[index]
  }
}

export default {
  boolean: () => new TPBoolean(),
  number: () => new TPNumber(),
  string: () => new TPString(),
  enum: (array) => new TPEnum(array),
}
