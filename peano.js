// Copyright (C) 2017 G. D. McBain

"use strict";

const R = require('ramda');

const zero = {};

const succ = n => ({pred: n});

const one = succ(zero);
const two = succ(one);
const three = succ(two);

const pred = R.prop('pred')

const isNonzero = R.has('pred');

const isZero = R.complement(isNonzero);

const toNumber = n => isZero(n) ? 0 : R.pipe(pred, toNumber, R.inc)(n);

const fromNumber = n => n == 0 ? zero : R.pipe(R.dec, fromNumber, succ)(n);

const add = m => isZero(m) ? R.identity : R.pipe(succ, add(pred(m)));

const mul = m => isZero(m) ? R.always(zero) : n => add (n) (mul(pred(m))(n));

const factorial = n => isZero(n) ? one : mul (n) (factorial(pred(n)));

      
console.log(toNumber(zero));
console.log(toNumber(one));
console.log(toNumber(add(zero)(one)));
console.log(toNumber(add(one)(zero)));
console.log(toNumber(mul(zero)(one)));
console.log(toNumber(mul(one)(zero)));
console.log(toNumber(factorial(three)));
console.log(toNumber(mul(fromNumber(3))(fromNumber(5))));

