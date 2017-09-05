"use strict";

const emptyList = {car: undefined,
		   cdr: null};

const cons = item => list => ({car: item, cdr: list});

const isEmpty = list => list.car == undefined;

const toArray = list => (isEmpty(list) ? [] :
			 [list.car].concat(toArray(list.cdr)));

console.log(toArray(emptyList));
console.log(emptyList.cdr);
const myList = cons(2) (cons(1) (emptyList));
console.log(toArray(myList));
