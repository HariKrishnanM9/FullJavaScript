function box (){
    setTimeout (()=>{
        console.log("Loading");

    },5000);
}
function box1(){
setTimeout (()=> {
    console.log("Loading Successfully");
},2000);
}
function box2 (){
    setTimeout(()=>{
        console.log("finish");
    },1000);
}
box()
box1()
box2()
