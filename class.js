class carBrands{
 punch(){

console.log(" 5 Star Safty car");
}

creta(){
    console.log("best for comfortable")
}
maruthi(){
    console.log("best for milage")
}
 }
 const spec = new carBrands();
 spec.punch();
 spec.creta();
 spec.maruthi();


class month{
    jan(){
        console.log("month of begining")
    }
    feb(){
        console.log("month of love")
    }
}

const states = new month();
states.jan();
states.feb();

class stu{
    student1(){
        console.log("Good")
    }
    student2(){
        console.log("Average")
    }
    student3(){
        console.log("Poor")
    }

}
const studentStatus = new stu()
studentStatus.student1();
studentStatus.student2();
studentStatus.student3();

class mobileBrands {
    Nokia(){
        console.log("Good Brand")
    }
}
const mobile = new mobileBrands
mobile.Nokia();


class loginDetails{
    constructor (userName,password,oneTimePassword,capcha){
this.custName = userName;
this.custPassword = password;
this.custOneTimePassword = oneTimePassword;
this.enterCapcha = capcha;
}

page(){
    console.log(` user name to be entered ${this.custName}\n
         password should be ${this.custPassword}\n One time password
         ${this.custOneTimePassword}\n capcha should be entered ${this.enterCapcha}`)
           }
   
       }
const credentials = new loginDetails("harish","KRisH@123","1015","aPPRaj24");
credentials.page();

class fruits{
    constructor (Apple,Orange,Mango,Grapes,Goa){
    this.f1 = Apple;
    this.f2 = Orange;
    this.f3 = Mango;
    this.f4 = Grapes;
    this.f5 = Goa;
    }

delivery(){ 
    console.log(`my most favaurote ${this.f1}\n second most favaurote ${this.f2}\n third most favaurote ${this.f3}\n
    next favaurote is ${this.f4}\n last favaroute is ${this.f5}`);
}
}
    const favaurFruites = new fruits("Red","Orange","yellow","green","LiteGreen");
    favaurFruites.delivery();

class bestOfbest{
    constructor (laptop,mobile,electronics,ecomerce,car){
        this.janlaptop = laptop;
        this.janmobile = mobile;
        this.janlaptopelectronics = electronics;
        this.janecomerce = ecomerce;
        this.jancar = car;
    }
    bestPerformanceBrand(){
        console.log(`mostSelling laptop ${this.janlaptop}\n mostSelling mobile ${this.janmobile}\n 
            mostSelling electronics ${this.janlaptopelectronics}\n 
        mostSelling ecomerce ${this.janecomerce}\n mostSelling car ${this.jancar}`)
        }
}
const superBrands = new bestOfbest ("HP","Vivo","LG","Amazon","Audi");
superBrands.bestPerformanceBrand();