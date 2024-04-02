//simple function
function show() {
    document.getElementById('n').innerHTML = "peter";
}
show();
//parametrized function

function add(a, b) {
    document.getElementById('m').innerHTML = a + b;
}
add(3, 4);
//arrow function
const display = () => {
    document.getElementById('m').innerHTML = 'arrow function';
}
display()
    //parametrized function
const display1 = (a, b) => {
    document.getElementById('m').innerHTML = a + "" + b;

}
display1(3, 4);
//return function
function coofee(name, size) {
    return `the ${name} coffee of ${size}`;
}
document.getElementById('m').innerHTML = coofee('latte', 5);
// immidiately invoked function
const a = () => {
    console.log("hello");
}
a();
(function show() {
    console.log("FG");
})();
const b = () => {
    console.log("WERFCXZ");
}
b();
//parametrized walle
function display2(emp, id) {
    console.log(emp, id);
}
display2(2, 4);
//inner outer walla
const outer = () => {
    console.log("outer function");
    const inner = () => {
        console.log("inner");
    }
    return inner();
}
outer();
//return k satt me
const outer1 = () => {
    console.log("outer1");
    const inner1 = () => {
        console.log("inner1");
    }
    return inner1();
}
outer1();

///outer()()
const outer2 = () => {
    console.log("outer2");
    const inner2 = () => {
        console.log("inner2");
    }
    return inner2();
}
outer2();
//return a
function show(a) {
    return a;
}
console.log(show(2));
//real not real
const real = () => {
    console.log("real");
}
const notreal = () => {
    console.log("not real");
}
console.log(real);
console.log(notreal);
//now
const t = () => {
    console.log('a');
    return 9;
}