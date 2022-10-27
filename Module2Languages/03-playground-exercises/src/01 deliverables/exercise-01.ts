console.log("************** DELIVERABLE 01 *********************");

const checkIsArray = (objectToCheck) => {
    return Array.isArray(objectToCheck) && objectToCheck.length > 0;
}
const head = (arrayValues) => {
    if (checkIsArray(arrayValues)) {
        let first, rest;
        [first, ...rest] = arrayValues;
        return first;
    } else {
        return arrayValues;
    }

}

const tail = (arrayValues) => {
    if (checkIsArray(arrayValues)) {
        let first, rest;
        [first, ...rest] = arrayValues;
        return rest;
    } else {
        return arrayValues;
    }
}


const init = (arrayValues) => {
    if (checkIsArray(arrayValues)) {
        return arrayValues.slice(0, arrayValues.length - 1);
    } else {
        return arrayValues;
    }
}


const last = (arrayValues) => {
    if (checkIsArray(arrayValues)) {
        return arrayValues[arrayValues.length - 1];
    } else {
        return arrayValues;
    }
}

console.log(checkIsArray(null));
console.log(head(null));
console.log(head([]));
console.log(head(["2"]));
console.log(head(["2", 3, 4]));
console.log(head(["2", 7, 7, 7, 7,]));
console.log(tail(["2", 7, 7, 7, 7, 7, 7, 7]));
console.log(tail(["2"]));
console.log(init(["2"]));
console.log(init(["2", 3, 4]));
console.log(last(["2"]));
console.log(last(["2", 4, 5, 6]));
