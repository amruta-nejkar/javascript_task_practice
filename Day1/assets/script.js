console.log("hi");

//-------------------Primitive-------------------//

// Number
var b = 50;
console.log("b is type of", typeof b)
console.log(b);

// String
var str = "My Name is Amruta";
console.log(str);
console.log(str, "type of", typeof str);


//Constant
const a = 100;
console.log(a);
console.log("a is type of", typeof a);
console.log("constant a has value of", a);

//Null
var c = null;
console.log("C is type of", typeof c);

//undefined
var x;
console.log("d is type of", typeof x);

//boolean
let y = true;
console.log("y has value of", typeof y)


//--------------Non Primitive--------------------//

//Object
let obj = {

    firstName: "Amruta",
    lastName: "Nejkar",
    age: 24
}

console.log(typeof Obj);
console.log(obj.firstName, obj.lastName);
console.log(obj.age);

//Array 
let arr = [100, 200, "text", 300];
console.log(arr[2], arr[3], arr[0], arr[1]);
console.log(arr[0], arr[1], arr[2], arr[3])


var z = 10;
console.log("This is z before function", z);

//Function 
function practice() {
    let p = 15;
    console.log("This is p in function", p)
}
console.log("practice is", typeof practice)
practice();