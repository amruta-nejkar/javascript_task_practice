var arr_bill = [80, 120, 250, 70, 100];

console.log("fixed bills are", arr_bill);
let indexValue = arr_bill.indexOf(80);
// console.log("index value of bill is ",indexVal);
let bill = arr_bill[indexValue];
console.log("Your Bill value is ", bill);

if (bill < 100) {
    console.log("GST is 15%")
    let gst = (bill * 15) / 100;
    console.log("GST value is", gst)
    arr_bill[indexValue] = bill + gst;
    console.log("final bill list is", arr_bill);
} else {
    console.log("GST is 20%");
    let gst = (bill * 20) / 100;
    console.log("GST value is", gst);
    bills[indexVal] = bill + gst;
    console.log("final bill list is", bills);
}