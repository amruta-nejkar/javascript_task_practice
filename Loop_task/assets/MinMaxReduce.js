// const list = [1,33,67,45,89,12,58,9];

// const LargeNum =list.reduce((prev, curr) => {
//       return Math.max(prev, curr)
// });

// const MinNum =list.reduce((prev,curr)=>{
//       return Math.min(prev,curr)
// });
// console.log(LargeNum);
// console.log(MinNum);

// let arrayList = [1, 2, 3, 4, 3, 21, 0];
// let max = arrayList[0];
// let min=arrayList[0];
// for (let i = 1; i < arrayList.length; ++i) {
//   if (arrayList[i] > max) {
//     max = arrayList[i];
//   }
//   else{
//     min=arrayList[i];
//   }
// }

// console.log(max);
// console.log(min);

var arr=[674,88,1,90,45];
function maxMinVal(a,b){
  if(a>b)
  {
     b=a;
     
  }
  return a;
}
let maxvalue = arr.reduce(maxMinVal);
console.log(maxvalue);