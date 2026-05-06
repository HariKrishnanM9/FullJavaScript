//Push add the value in the end of array

let arr = [18,27,36,45,54,63,72,81,90]
arr.push(9);
console.log(arr);

// pop remove the value in the end of array

let arr1= [9,18,36,27,81,72,90]
arr1.pop();
console.log(arr1);

//shif remove the first element in the array

let arr2 = [27,36,81,90,9,72]
arr2.shift(18);
console.log(arr2);

//unshift add a new element in the array

let arr3 = [20,4,85,65,78,]
arr3.unshift(9);
console.log(arr3);

let ar = ["punch","nexon","harrier","safari","altroz",]
ar.unshift("tigor");
console.log(ar);

//splice can add remove and replace

let cars = ["punch","nexon","harrier","safari","altroz",]
cars.splice(2,0,"tigor");
console.log(cars);

let cars1 =["punch","nexon","harrier","safari","altroz",]
cars1.splice(4,1,"THAR ROXX");
console.log(cars1);

//sort

let nums = [2,5,8,9,7,3,0]
console.log(nums.sort());

// MAP doesn't change array value , it gives new value


let mapm = [10,50,40,60,79,89,99]
let res  = mapm.map((p,o,s)=>o+2);
console.log(res);

let finds = [20,54,85,67,84,96,]
let counts = finds.map((V,I,O)=>I*72);
console.log(counts);

//Filter

let fil = [20,5,2,4,8,9,6,9,0]// index count 
let contss = fil.filter((x,y,z)=>x>9);
console.log(contss);

let frt = ["banana","orange","apple","mango"]
let filtre =frt.filter((x,y,z)=> x > "mango");
console.log(filtre);




