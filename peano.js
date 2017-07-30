// Copyright (C) 2017 G. D. McBain

zero = {pred: undefined};

function isZero(n) {
    return n.pred == undefined;
}

function toNumber(n) {
    return isZero(n) ? 0 : 1 + toNumber(n.pred);
}

function succ(n) {
    return {pred: n};
}

function add(n, m) {
    return isZero(m) ? n : add(succ(n), m.pred);
}

console.log(toNumber(zero));
console.log(toNumber(succ(zero)));
console.log(toNumber(add(zero, succ(zero))));
