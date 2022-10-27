console.log("************** DELIVERABLE 03 *********************");
function clone(source) {
    return {...source};
}

function merge(source, target) {
    return {...target, ...source };
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };


const c = clone(a);
console.log(a===c);
console.log(a, c);

const d = merge(a,b);
const e = merge(b,a);
console.log(d);
console.log(e);