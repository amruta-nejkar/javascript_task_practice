var height = 1.80;
var weight = 50;

function bmi() {
    var bmi = weight / (height * height);
    return bmi;
}

var b = bmi();
console.log("bmi is", b)