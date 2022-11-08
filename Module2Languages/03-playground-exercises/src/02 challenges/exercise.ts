console.log("************** CHALLENGES *********************");
console.log("Use folder 02 challenges to practice with challenge exercises");
console.log("You can add new files as long as they are imported from index.ts");

console.log("************ Trazas por consola *****************");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"]),
];

const run = triggers => {
    //console.log("first");
    //triggers.forEach(t => t());


    triggers[0]().then(() =>
        triggers[1]().then(() => {
            console.log("first");
        })
    );

};

run(triggers);

console.log("************ Deep Get *****************");

const myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

const deepGet = (theObject, ...rest) => {
    let returnValue = theObject;
    for (const iterator of rest) {
        returnValue = returnValue[iterator];
    }
    return returnValue;
}

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}


console.log("************ Deep Set *****************");


function deepSet (value, theObject, ...rest) {
    switch (rest.length) {
        case 0:
            break;
        case 1:
            theObject[rest[0]] = value;
            break;
        default:
            const element = rest.shift();
            theObject[element] = theObject[element]??{};
            deepSet(value, theObject[element]??{}, ...rest );
            break;

    };
}


let myObject2 = {};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));  // Do nothing // {a: 3}