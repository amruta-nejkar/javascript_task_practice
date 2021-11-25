//Array_methods/
const arr = ['one', 'two', 'three', 'four', 'five'];
const a = new Array(1, 2, 3, 4, 5, 6, 7);
// length
// console.log(arr.length)

var getLastVal = arr[arr.length - 1];
console.log('getlast value', getLastVal); //last value

// indexof
var getPos = arr.indexOf('two');
console.log('postion', getPos);

//includes
var getPos1 = arr.includes('four');
console.log('getPos1', getPos1);

var getpos2 = a.includes(10);
console.log('getPos2', getpos2);

a[3] = 'amruta'
console.log(a); //add value

//push
var ins1 = a.push(8);
console.log(ins1);

//unshift
var ins2 = a.unshift(10)
console.log(ins2);

//remove-pop and shift
var rem1 = a.pop(8);
console.log(rem1)

var rem2 = a.shift();
console.log(rem2);

//reverse
var res = a.reverse();
console.log(res);

//reverse using loop
var pqr = [1, 2, 3, 4, 5];
var xyz = [];
for (var i = pqr.length - 1; i >= 0; i--) {
    var tmp = pqr[i];
    xyz.push(tmp);
}
console.log(xyz);

//map
var data = pqr.map(data => data + 10);
console.log(data);

//foreach
var data1 = pqr.forEach(data => {
    console.log('data', data + 20)

});

//filter

// const age = [40, 30, 46, 20];
// console.log(age);

// function age_check(age) {
//     age >= 30;
//     return age;

// }
// console.log(age);


//fill
var na = ['abc', 'pqr', 'xyz'];
na.fill('efg');
console.log(na);

//


//concat
var e = [1, 2, 3];
var f = [4, 5, 6];
var g = [7, 8, 9];
console.log(e.concat(f, g));
//splice
var sp = pqr.splice(2);
console.log(sp);
var sp1 = pqr.splice(0, 2);
console.log(sp1);