// Copyright (C) 2017 G. D. McBain

"use strict";

const zero = {};

const isZero = n => n.pred == undefined;

const toNumber = n => isZero(n) ? 0 : 1 + toNumber(n.pred);

const succ = n => ({pred: n});

const add = n => m => isZero(m) ? n : add(succ(n)) (m.pred);

console.log(toNumber(zero));
console.log(toNumber(succ(zero)));
console.log(toNumber(add(zero) (succ(zero))));
