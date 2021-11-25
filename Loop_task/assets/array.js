//task1
const color=['red','blue','green','black'];
var count=0;
var val='white';
for(i=0;i<=color.length;i++){
  if(color[i]==val)
  count++;
}
if(count==0){
  color.push(val);
  console.log(color);
}
else{
  console.log("Already exit");
}

// task2
// const number=[3,4,5,7,8,10,3,3,7,7,8];
// function duplicateCnt(array){
//     let num1={};
//     for(i=0;i<array.length;i++){
//         if(num1[array[i]]){
//             num1[array[i]] +=1;
//         }else{
//             num1[array[i]]=1;
//         }
//     }
//     console.log(num1);
// }
// duplicateCnt(number);





