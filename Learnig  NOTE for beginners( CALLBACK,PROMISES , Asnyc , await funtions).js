
//  example traget order : walkdog  / cleankitchen /  takeoutrash
/*

function walkdog() {
    setTimeout(() => {
        console.log("you will walk the dog");

    }, 700);


}

function cleankitchen() {
    setTimeout(() => {
        console.log("you will clean the kitchen");
    }, 600);

}

function takeoutrach() {
    setTimeout(() => {

        console.log(" you will clean the  trash");

    }, 500);
}
                     //synchronus  code  will  code  like this   but  in this  case we use  settimeout  mehtod then
                // this  will be asynchronus  code  becourse  code  have a  delay   not  excute  in sequecial order
walkdog();
cleankitchen();
takeoutrach();

/* if we  want  excute   this  funtion  in sequential  manner  we   can  use   callbacks ()  but this is old handling method we call it callback hell
 becourse  if we use callbacks  it will hard  to read code  then  we can use  promises   to do same thing.
  if we use promises  it will imporve code readibility
*/
//   handle with   promises🤞

/*
function walkdog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {



            const dogwalked = true;
            if (dogwalked) {
                resolve("you walk the dog");
            }
            else {
                reject("you didnt walk the dog");
            }

        }, 700);  // time  is 700ms it means in sychronus   it will start lastly in her  we use promises for  excute funtions parallary and chang change the order we target
    });
}




function cleankitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clean = true;
            if (clean) {
                resolve("you clean the kitchen");

            } else {
                reject(" bad boy miss the job");
            }
        }, 600);

    });


}

function trashout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trash = true;
            if (trash) {
                resolve("good boy goodjob");
            } else {
                reject("bad boy do it ");
            }




        }, 100);
    });
}

walkdog().then(value => { console.log(value); return cleankitchen() })
         .then(value=>{console.log(value); return trashout()})
         .then(value=>{console.log(value);console.log("you finsh your works")})
         .catch(error=>{console.log(error);});
*/

/*
         //  WE  can do this task  more   felxible way using Async / await
          * /Async = Makes a function return a promise
             Await = makes an async funtion  wait for a promise

             Allows you write asynchronous code in a synchronus manner
             async dosent have resolve or reject parameters
             Everything after Await is placed in an event queue
             
            */
           //👨‍💻Let's see how it do
/* 
async function walkdog() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const walk = true;
            if (walk) {
                resolve("good boy dog so happy");
            } else {
                reject(" lazy man go for a walk");
            }
        }, 600);

    });

}


async function cleankitchen() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const clean = true;
            if (clean) {
                resolve("good job u are clean boy");
            } else {
                reject("pleace clean ur kitchen");
            }

        }, 500);
    });
}

async function trashout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trash=true;
            if (trash){
                resolve("ur are  really good boy");
            }else{
                reject(" plase go out and trow the trash");
            }

        },100);
    });
}

async function doit(){
    try{

        const walkresult=await walkdog();
        console.log(walkresult);
        const cleankitchenresult=await cleankitchen();
        console.log(cleankitchenresult);
        const trashresult =await trashout(); 
        console.log(trashresult);
    }catch(error){
        console.error(error);
    }
}


doit();