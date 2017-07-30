emptyList = {car: undefined,
	     cdr: null};

function cons(item, list) {
    return {car: item,
	    cdr: list};
}

function isEmpty(list) {
    return list.car == undefined;
}

function toArray(list, array) {
    return isEmpty(list) ? [] :
	[list.car].concat(toArray(list.cdr));
}

console.log(toArray(emptyList));
console.log(emptyList.cdr);
myList = cons(2, cons(1, emptyList));
console.log(toArray(myList));
