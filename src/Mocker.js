/**
 * Created by erichua on 16/05/2017.
 */

import Types from './Types'
import * as _ from './tools'
/**
 * mock tools base on react type
 */
export default class Mocker {
  static mock (schema) {
    if (Mocker._isPrimaryType(schema)) {
      return Mocker.mockPrimaryType(schema)
    } else if (_.isObject(schema)) {
      return Mocker.mockObject(schema)
    } else if (_.isArray(schema)) {
      return Mocker.mockArray(schema)
    } else {
      return schema
    }
  }

  static mockObject (objConfig) {
    let result = {}
    for (let key in objConfig) {
      result[key] = Mocker.mock(objConfig[key])
    }
    return result
  }

  static mockArray (valueType) {
    let result = []
    for (let i in valueType) {
      result.push(Mocker.mock(valueType[i]))
    }
    return result
  }

  static mockPrimaryType (valueType) {
    if (!valueType || !valueType.random) {
      throw new Error('valid type config')
    }
    return valueType.random()
  }

  static _isPrimaryType (valueType) {
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
