// calculator_age
var current_year = 2021;
var dob_year = 1997;

function calculate_age(x, y) {
    console.log("birth year is", x);
    console.log("current year is", y);
    var age = current_year - dob_year;
    return age;
}
var age = calculate_age(1997, 2021);
console.log("age is", age);