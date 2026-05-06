function go(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
let shop = true;
if(shop){
    resolve (" i am going to the shop");
}else{
reject (" i am not going to the shop");
}
        },500);
    })
}
function Buy (){
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
let shop = true;
if (shop) {
    resolve (" i am buying the product");
}else{
    reject (" i am not buying the product");

}

},3000);

    });
}
function change (){
    return new Promise ((resolve,reject) => {
setTimeout (() => {
let shop = false;
if (shop){
    resolve ("i am getting the changes");
}else{
    reject (" i am not getting the changes");
}
},5000);
})
}
function backHome (){
    return new Promise((resolve,reject) =>{
setTimeout(() => {
    let shop = true;
    if(shop){
        resolve ("i am back to the home" );
    }else{
        reject (" i am not back to the home");
    }
    },500);
})
    }

//    Old method .then.catch but still uses in some functions.

// //go()
// .then(val => {console.log(val);return Buy()})
// .then(val =>{console.log(val);return change()})
// .catch(val =>{console.log(val);return backHome()})//error halde with .catch
// .then(val =>{console.log(val)})

async function execussion () {  //new method in promise.(try catch)
try {
    const a = await go();
    console.log(a);
    const b = await Buy();
    console.log(b);
    const c = await change();
    console.log(c);
    const d = await backHome();
    console.log(d);
}catch (e){
    console.log(e);

}
}
 execussion();   
