console.log("functions running...");

// 1. functoin declaration (creation the fn)
function sayHello(){
    //the body of fn
    console.log("Hello cohort 64");
}

// 2. call/run/trigger/execute the fn(code, console, user)
sayHello(); // code run
sayHello(); // code run
sayHello(); // code run

// Example 2 with 1 parameter
function greetBird(birdName){
    document.write(`<p> Hello <b> ${birdName} </b>! 
        ready to destroy some pigs`);
}

greetBird("Blue");
greetBird("Red");
greetBird("Yellow");

// Example 3 with 2 parameters

function greetPlayer(firstName, lastName){
    document.write(`<p> Welcome back ${firstName} ${lastName}!</p>`);
}

greetPlayer("Mark","York");
greetPlayer("Ron","Person");




function askPigName(){
    let pigName = prompt("Enter the pig's name: ");
    console.log(`Target: ${pigName}`)
}

//Example 5 with default parameters
function add(num1=0, num2=0){
    let total = num1 + num2;
    console.log(`The total is ${total}`);
}

add()
add(2,3)
add(5,22)

function combineNames(firstName="Unknown", lastName="Unknown"){
    console.log(`${firstName} ${lastName}`)
}
combineNames()


//function convertToSeconds(mins){
//    let secs = mins * 60;
//    console.log(`The time in seconsds is ${secs}`)
//}

//convertToSeconds(60);

function convertToSeconds(){
    let mins = prompt(`Enter the mins`);
    let secs = mins * 60;
    document.getElementById("results").innerHTML=`<p>${mins} mins are ${secs} secs</p>`
}