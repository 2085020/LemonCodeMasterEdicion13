console.log("************** DELIVERABLE 02 *********************");
const concat = (a,b) => {
    return [...a, ...b];
}

const concatMultiple = (a,b, ...moreArrays) => {
    let returnArray = [...a, ...b];
    for (const element of moreArrays) {
        returnArray = [...returnArray, ...element];
    }
    return returnArray;
}

console.log(concat([1,2], [3,4,1]));

console.log(concatMultiple([1,2], [3,4,1], [1,2], [3,4,1], [9,8,7,6,5]));
