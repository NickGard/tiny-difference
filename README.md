# tiny-difference

[![source](https://badgen.net/npm/v/@ngard/tiny-difference)](https://www.npmjs.com/package/@ngard/tiny-difference)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-difference)](https://bundlephobia.com/result?p=@ngard/tiny-difference)
[![build status](https://badgen.net/travis/NickGard/tiny-difference)](https://travis-ci.org/NickGard/tiny-difference)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal-weight utility identical to `lodash.difference`. For when every byte counts!

<hr/>

lodash.difference [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.difference)](https://bundlephobia.com/result?p=lodash.difference)
<br/>
tiny-difference [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-difference)](https://bundlephobia.com/result?p=@ngard/tiny-difference)

<hr/>

## Syntax

```js
difference(/* array, [...arrays] */)
```

## Parameters

`array` - The array to calculate the difference to. Resulting array elements are in the same order as appear in this array
<br/>
`arrays` - Any number of other arrays, whose elements will not appear in the returned array

## Return

A new array containing only the elements found in the first array and **not** in the other arrays, in the order as they appear in the first array.

## Example

```javascript
import { difference } from '@ngard/tiny-difference';

const diff = difference([1,2,3,4], [1,2]); // returns [3,4]
const diff = difference([1,2,3,4], [1,2], [2,3,5]); // returns [4]
```
