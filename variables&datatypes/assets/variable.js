//var-goble scope,can be reassign and redeclare
//let-block scope,can be reassign but can't redeclare
//const-block scope,can't be reassign or redeclare

// rules for variable
//


var a = 20;
var b = 30;
b = 50;
console.log(a);
console.log(b);

var p;
console.log(p);
function add() {
    let x = 5;
    let y = 70;
    let sum = x + y;
    console.log(sum);
}
add();

const h=520;
console.log(h);


// function practice(){
//     let c=15;
//     console.log(c);

// }
// practice();