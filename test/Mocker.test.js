const expect = require('chai').expect

import { Mocker, Types } from '../'
describe('Mocker', function () {
  describe('mockerObject', function () {
    for (let i = 0; i < 1; i++) {
      const objectSchema = {
        stringDate: Types.string('date'),
        stringRange: Types.string().range(10, 100),
        numberRange: Types.number().range(0, 100),
        enum: Types.enum(['A', 'B', 'C']),
        default: '',
        plainObject: {
          far: Types.string(),
          bar: Types.number()
        },
        stringArray: [Types.string()],
        objectArray: [{
          far: Types.string(),
          bar: Types.number()
        }]
      }
      const mockerObject = Mocker.mockObject(objectSchema)

      console.log(mockerObject)

      it(`stringRange.length should be between 10-100`, function () {
        expect(mockerObject.stringRange.length).be.least(10).and.most(100);
      })

      it(`stringDate should be a date`, function () {
        expect(mockerObject.stringDate.length).be.equal(10)
      })

      it(`numberRange should be between 0-100`, function () {
        expect(mockerObject.numberRange).be.least(0).and.most(100)
      })

      it(`default should be a string`, function () {
        expect(mockerObject.default).be.a('string')
      })

      it(`enum should be one of the array`, function () {
        expect(mockerObject.enum).to.be.oneOf(['A', 'B', 'C'])
      })

      it(`plainObject should be an object`, function () {
        expect(mockerObject.plainObject).to.be.an('object')
        expect(mockerObject.plainObject.far).to.be.an('string')
        expect(mockerObject.plainObject.bar).to.be.a('number')
      })

      it(`stringArray should be an array contains string`, function () {
        expect(mockerObject.stringArray).to.be.an('array')
        expect(mockerObject.stringArray[0]).to.be.an('string')
      })

      it(`objectArray should be an array contains object`, function () {
        expect(mockerObject.objectArray).to.be.an('array')
        expect(mockerObject.objectArray[0]).to.be.an('object')
      })
    }
  })
})
