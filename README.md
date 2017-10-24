[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker?ref=badge_shield)
[![npm version](https://badge.fury.io/js/%40unpourtous%2Fmocker.svg)](https://badge.fury.io/js/%40unpourtous%2Fmocker)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/UnPourTous/mocker.svg?branch=master)](https://travis-ci.org/UnPourTous/mocker)
# Mocker
## 0. Introduction
Mocker is a simple and lightweight library which is used for generating random js object as defined schema. 

### Features
1. **Lightweight**: Only 4 basic type, pretty easy to get start.
2. **Extendable**: String type support RegExp which allow your to generate custom type, but we support array and object too
3. **Non-invasive**: Keep all properties key clean, do not modify it since you may need it anywhere else.

## 1. Installation
```
npm install @unpourtous/mocker --save
```
## 2. Usage
a) First, define your object, the object schema.

``` js
import { Types } from '@unpourtous/mocker'
const objectSchema = {
  stringDate: Types.string('date'),
  stringRange: Types.string().range(10, 100),
  numberRange: Types.number().range(0, 100),
  enum: Types.enum(['A', 'B', 'C']),
  fixNumber: 520, // If a valid type was set, the valid type will be the value
  fixString: 'this is a fixString',
  plainObject: { // define a object array 
    far: Types.string(),
    bar: Types.number()
  },  
  stringArray: [Types.string()],  // define a primary type array
  objectArray: [{ // define a object array 
    far: Types.string(),
    bar: Types.number()
  }]
}
```
b) Secondly, use Mocker to generate a random object.

``` js
import { Mocker } from '@unpourtous/mocker'
const mockerObject = Mocker.mockObject(objectSchema)

// the mockerObject should like 
// { 
//   stringDate: '1941-10-03',
//   stringRange: 'PKlDGzTY10pMZjYDIMtEWThTlXGcQE1gp2rYcStO2n52vw',
//   numberRange: 62.61,
//   enum: 'B',
//   default: 'GXvmNy',
//   fixNumber: 520, 
//   fixString: 'this is a fixString',
//   plainObject: { far: 'O0qBn', bar: 464255.58 },
//   stringArray: [ 'X5iH5' ],
//   objectArray: [ { far: '', bar: 574378.47 } ] 
// }
```
## 3. Detail Types & API
### String
API | Description
--- | --- 
string() | Create a instance of TPString.
range(min, max) | Set min and max length for string, this is only used if this string dose not set `regExp`
regExp(regExp) | Set regExp for this string, if this is set, the generated string match this regexp.
fixValue(fixValue) | Set fix value

### Number
API | Description
--- | --- 
number() | Create a instance of Number.
range (min, max) | Set min value and  max value for number
format(format) | Set number format, get more detail from [Numeral.js](http://numeraljs.com/)
fixValue(fixValue) | Set fix value

### Enum
API | Description
--- | --- 
enum(enumValues) | Create a instance of Enum. `enumValues` should be a array containers all possible value.


### Boolean
API | Description
--- | --- 
boolean() | Create a instance of Boolean.
fixValue(fixValue) | Set fix value

### APIS 
## 4. Test & Demo
All test case was put in `test/`.

Test result: 

![image](https://user-images.githubusercontent.com/1309744/30246148-2022bde8-9624-11e7-8ccb-fa24ef143b27.png)

You can also clone it run the test by youself.

``` js
git clone https://github.com/UnPourTous/mocker.git
cd mocker
yarn 
yarn run test
```

## 5. Thanks 
- [Randexp.js](http://fent.github.io/randexp.js/) used to generate random string match a specified regexp
- [Numeral.js](http://numeraljs.com/) as number format library
- [Chai](http://chaijs.com) as test assert library
- [Mocha](https://mochajs.org/) as test framework

## 6. TODO
1. Add browser support

## 7. License
MIT

## Refs 
- http://babeljs.io/docs/plugins/transform-es2015-modules-umd/
- http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6
- https://github.com/webpack/webpack/issues/2785#issuecomment-293584946
- https://github.com/gaearon/redux-thunk/issues/43

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2FUnPourTous%2Fmocker?ref=badge_large)
