//Reverse String

let str = "my name is Hari";
console.log(str.split(" ").reverse());//space
console.log(str.split("").reverse().join(""));//without space

//find the count of charectors

let fruit = "Banana";
let count = fruit.split("a").length-1;
console.log(count);

//replaceAll the charector

let place = "chennai city center";
 console.log(place.replaceAll("c","C"));


 let pls = "hello java welcome";
 console.log(pls.replaceAll("hello","Hello").replaceAll("java","Java").replaceAll("welcome","Welcome"));

let rep1 =["hello java welcome"]
rep1.splice(0,1,"Hello");rep1.splice(1,1,"Java");rep1.splice(2,1,"Welcome");
console.log(rep1);


 let rep = "hello java welcome".split(" ");
            
                 rep.splice(0,1,"Hello");
           rep.splice(1,1,"Java");
     rep.splice(2,1,"Welcome");
console.log(rep.join(" "));


let dec = [10,54,86,12,67,54]
dec.sort().reverse();
console.log(dec.join(" "));

let marks = 55
;

               if (marks >=90 && marks <=100){
console.log("A Gread");
                       }else if (marks >=80 && marks <=89){
        console.log(" B Grade");
                    }else if (marks >=70 && marks <=79){
        console.log(" C Grade");
                 }else if (marks >= 60 && marks <=69){
   console.log("D Grade")
              }else if (marks >= 50 && marks <=59){
        console.log("Average");
           }else if (marks >= 40 && marks <=49){
        console.log("Below Average")
       }else{
        console.log("fail");
      }

      let name

      
    let name = "hello:java:hello".split(" ");
    let count = {}
    for (let a = 0;a<name.length;a++){
        if (count[name[a]]){
            count [name[a]] ++
        }else {
            count[name[a]]=1
        }
    }
    console.log(count);



        let obj = {
        name:"Saravan",
        place :"Bangalore",
        age : 28
    }
    for (ps in obj){
        console.log(ps + "  " + obj[ps]);   
    }


        let name = ["Hello","java","Hello"];
    let count = {}
    for (let a = 0;a<name.length;a++){
        if (count[name[a]]){
            count [name[a]] ++
        }else {
            count[name[a]]=1
        }
    }

        console.log(count);
    
            let name = "harikrishnan";
    let count = {}
    for (let a = 0;a<name.length;a++){
        if (count[name[a]]){
            count [name[a]] ++
        }else {
            count[name[a]]=1
        }
    }
    for (ps in count){
        console.log(ps + "  " + count[ps]);
    }

//reverse string with using variable's functions loops.

let god = "lord shiva vishnu";

let backword = "";

function backText (){

    
    for(let a = god.length -1; a >=0;a--){
    backword += god[a]
    }

    console.log(backword);
}

backText();

//function using parameter arguments for output

function reverseText (stringReverse){
    let name ="";
    for(let i = stringReverse.length -1; i >= 0;i--){
        name+= stringReverse[i]
    }
console.log(name);
}
reverseText("Playwright is my favourate testing language");


function evenNumbers (numbers){
    let fn = "";
    for(let i = 0;i <= 12;i+=2) {
        fn += numbers[i]
    }
    console.log(fn);
}
evenNumbers("Even Number is ")

let maximum = [520,248,120,4895,999,888,4545,897,1818]
let find = maximum [0]
for (i = 1; i < maximum.length;i++){
    if (maximum [i] > find ){
         find = maximum[i]
    }
}
console.log(find);

//let cars = ["alto","wagonR","punch","xuv700","nexon","ThorRoxx","Scorpio","harrier","seirra"]


let cars = [25,48,52,48,25]
let parts = cars [0]
for (i = 1; i < cars.length; i++){
if (cars[i] > parts){
    parts = cars[i]
}
}


console.log(parts);