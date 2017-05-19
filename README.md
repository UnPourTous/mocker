# mocker
## Introduction

## Installation
```
npm install @unpourtous/mocker --save
```
## Quick Start
a) First, define your object, the object schema.
``` js
import { Types } from '@unpourtous/mocker'
let objectSchema = {
  stringDate: Types.string('date'),
  stringRange: Types.string().range(10, 100),
  numberRange: Types.number().range(0, 100),
  enum: Types.enum(['A', 'B', 'C']),
  default: '',
}
```
b) Secondly, use Mocker to generate a random object.
``` js
import { Mocker } from '@unpourtous/mocker'
const mockerObject = Mocker.mockObject(objectSchema)
// the result should like 
// { 
//   stringDate: '1980-11-31',
//   stringRange: 'Lnin392dBA_TlK',
//   numberRange: '50.82',
//   enum: 'C',
//   default: 'Z' 
// }
```
## API

## Test & Demo
All test case was put in `test/`
Test result: 
```
  Mocker
    mockerObject
      ✓ stringRange.length should be between 10-100
      ✓ stringDate should be a date
      ✓ numberRange should be between 0-100
      ✓ default should be a string
      ✓ enum should be one of the array
```

## Thanks 
- [Randexp.js](http://fent.github.io/randexp.js/) used to generate random string match a specified regexp
- [Numeral.js](http://numeraljs.com/) as number format library
- [Chai](http://chaijs.com) as test assert library
- [Mocha](https://mochajs.org/) as test framework
