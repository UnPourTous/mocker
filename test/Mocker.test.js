const expect = require('chai').expect

import { Mocker as MockerES6, Types as TypesES6} from '../dist'

const { Mocker, Types } = require('../dist')

describe('Mocker', function () {
  describe('module', function () {
    it('es6 export test', function () {
      const mockerObject = MockerES6.mockObject({str: TypesES6.string('date')})
      expect(new RegExp(/(19|20)\d\d([-])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])/).test(mockerObject))
    })

    it('cmd export test', function () {
      const mockerObject = Mocker.mockObject({str: Types.string('date')})
      expect(new RegExp(/(19|20)\d\d([-])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])/).test(mockerObject))
    })
  })
  describe('mockerObject', function () {
    for (let i = 0; i < 1; i++) {
      const objectSchema = {
        stringDate: Types.string('date'),
        stringRange: Types.string().range(10, 100),
        numberRange: Types.number().range(0, 100),
        enum: Types.enum(['A', 'B', 'C']),
        fixNumber: 520,
        fixString: 'this is a fixString',
        plainObject: {
          foo: Types.string(),
          bar: Types.number()
        },
        stringArray: [Types.string()],
        objectArray: [{
          foo: Types.string(),
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

      it(`fixNumber should be 520`, function () {
        expect(mockerObject.fixNumber).to.equal(520)
      })

      it(`fixString should be "this is a fixString"`, function () {
        expect(mockerObject.fixString).to.equal('this is a fixString')
      })

      it(`enum should be one of the array`, function () {
        expect(mockerObject.enum).to.be.oneOf(['A', 'B', 'C'])
      })

      it(`plainObject should be an object`, function () {
        expect(mockerObject.plainObject).to.be.an('object')
        expect(mockerObject.plainObject.foo).to.be.an('string')
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
