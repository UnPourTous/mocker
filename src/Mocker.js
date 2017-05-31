/**
 * Created by erichua on 16/05/2017.
 */

import Types from './Types'
const _ = require('lodash')
/**
 * mock tools base on react type
 */
export default class Mocker {
  static mockObject (objConfig) {
    const result = {}
    for (let key in objConfig) {
      let valueType = objConfig[key]
      if (!valueType) {
        result[key] = valueType
      } else {
        if (Mocker._isValidType(valueType)) {
          result[key] = Mocker.mockValue(valueType)
        } else {
          if (_.isPlainObject(valueType)) {
            result[key] = Mocker.mockObject(valueType)
          } else if (_.isArray(valueType)) {
            if (Mocker._isValidType(valueType[0])) {
              result[key] = [Mocker.mockValue(valueType[0])]
            } else {
              result[key] = [Mocker.mockObject(valueType[0])]
            }
          } else {
            result[key] = valueType
          }
        }
      }
    }
    return result
  }

  static mockValue (valueType) {
    if (!valueType || !valueType.random) {
      throw new Error('valid type config')
    }
    return valueType.random()
  }

  static _isValidType (valueType) {
    if (!valueType || !_.isFunction(valueType.name)) {
      return false
    }
    return [
      Types.string().name(),
      Types.boolean().name(),
      Types.number().name(),
      Types.string().name(),
      Types.enum([]).name()
    ].indexOf(valueType.name()) !== -1
  }
}
