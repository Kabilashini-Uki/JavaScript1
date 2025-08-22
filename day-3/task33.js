var num1=50;

function checknum1(num1){
    if(num1>0){
        return "Positive Number"
    }
     else if(num1<0){
         return "Negative Number"
    }
    else{
        return "Zero"
    }
}
console.log(checknum1(num1));

var age=13;

function checkage(age){
    if(age>18){
        return "You can Vote"
    }
    else{
        return "You cannot Vote"
    }
}

console.log(checkage(age));

var num2=23;

function checknum2(num2){
    if(num2%2){
        return "odd"
    }
    else{
        return "Even"
    }
}
console.log(checknum2(num2));

var num3=75;
function checknum3(num3){
    if(num3%5){
        return "Num3 is undivisable by 5"
    }
    else{
        return "NUm3 is divisable by 5"
    }
}
console.log(checknum3(num3));

let num5=10;
let num6=5;
let num7=30;

function definelarge(num5,num6,num7){
    if(num5>num6 && num5>num7){
        return "Largest number is ="+num5
    }
    else if(num6>num5 && num6>num7){
        return "The largest number is ="+num6
    }
    else if (num7>num5 && num7>num6){
        return "The greatest number ="+num7 
    }   
    }


console.log(definelarge(num5,num6,num7));

let year=2015

function checkyear(year){
    if (year%4){
        return "It is Leap year"
    }
    else{
        return "It is not a Leap year"
    }
}
console.log(checkyear(year));

