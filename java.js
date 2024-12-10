
// for(let i=0;i<5;i++){
//     console.log("AR Bijoy")
// }

//for of loop

// let str="AR Bijoy";
// let size=0;
// for( let j of str){
//     console.log(j);
//     size++;
// }
// console.log("string size-=",size);

//for in loop

let student = {
    name: "Bijoy", Age: 23, cgpa: 3.22, pass: false,
};
for (let key in student)
    {
    console.log("key:", key, "value:", student[key] );
}

//0 to 100 even number

// let num=0;
// while(num<=100){

//     console.log(num);
//     num+=2;
// }

//guess the correct number

// let gamenumber=25;

// let usernumber= prompt ("enter the number:");

// while(usernumber!=gamenumber){
// usernumber= prompt("wrong number! guess again");
// }
// console.log("congrats u guess correctly");
// 

//string

 let str=prompt("enter name:");

 let str2= "@"+str+str.length;
 console.log(str2);


let marks=[1,2,3,4,5];

console.log(marks.legnth);
console.log(marks);

let arr=[4,6,11,3,55];
let sum=0;
for(let x of arr){
    sum+=x;
    x++;
}
let avg = sum/(arr.length);
console.log(avg);