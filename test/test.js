const expect = require('chai').expect

import { Mocker, Types } from '../'
describe('Mocker', function () {
  describe('mockerObject', function () {
    for (let i = 0; i < 40; i++) {
      const mockerObject = Mocker.mockObject({
        stringDate: Types.string('date'),
        stringRange: Types.string().range(10, 100),
        numberRange: Types.number().range(0, 100),
        enum: Types.enum(['A', 'B', 'C']),
        default: '',

      })

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
        expect(mockerObject.numberRange).be.a('string')
      })

      it(`enum should be one of the array`, function () {
        expect(mockerObject.enum).to.be.oneOf(['A', 'B', 'C'])
      })
    }
  })
})
