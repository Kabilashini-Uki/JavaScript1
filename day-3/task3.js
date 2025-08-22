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
