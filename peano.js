// Copyright (C) 2017 G. D. McBain

"use strict";

const R = require('ramda');

const zero = {};

const succ = n => ({pred: n});

const pred = R.prop('pred')

const isNonzero = R.has('pred');

const isZero = R.complement(isNonzero);

const toNumber = n => isZero(n) ? 0 : R.pipe(pred, toNumber, R.inc)(n);

const add = m => isZero(m) ? R.identity : R.pipe(succ, add(pred(m)));

const mul = m => isZero(m) ? R.always(zero) : n => add (n) (mul(pred(m))(n));

console.log(toNumber(zero));
console.log(toNumber(succ(zero)));
console.log(toNumber(add(zero)(succ(zero))));
console.log(toNumber(add(succ(zero))(zero)));
console.log(toNumber(mul(zero)(succ(zero))));
console.log(toNumber(mul(succ(zero))(zero)));
