[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker?ref=badge_shield)
[![npm version](https://badge.fury.io/js/%40unpourtous%2Fmocker.svg)](https://badge.fury.io/js/%40unpourtous%2Fmocker)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

# Mocker

## 0. Introduction
Mocker is a simple and lightweight library for generating random js object as predefind schema. 

## 1. Installation
```
npm install @unpourtous/mocker --save
```
## 2. Usage
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
## 3. Detail Types & API
### string
API | Description
--- | --- 
range(int min, int max) | Set min and max length for string, this is only used if this string dose not set `regExp`
regExp(RegExp regExp) | Set regExp for this string, if this is set, the generated string match this regexp.

### number

### enum

### boolean




### APIS 

## 4. Test & Demo
All test case was put in `test/`.

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

## 5. Thanks 
- [Randexp.js](http://fent.github.io/randexp.js/) used to generate random string match a specified regexp
- [Numeral.js](http://numeraljs.com/) as number format library
- [Chai](http://chaijs.com) as test assert library
- [Mocha](https://mochajs.org/) as test framework

## 6. License
MIT

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker?ref=badge_large)
