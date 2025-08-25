var num1=20;

function checknum(a){
    if(a%1 && a%a){
        return "It is Prime number"
    }
    else{
        return "It is not Peime number"
    }
}

var num2=8000;

function checkamount(b){
    if(b>5000){
        return b-b/20;
    }
    else if(b>2000){
        return b-b/10;
    }
    else{
        return "No Discount"
        
    }
}





var weight=50;
var hight=149;

function check(c,d){
    if(c*c/d>18.5){
        return "You are Underweight"
    }
    else if(18.5>c*c/d<24.9){
        return "You are Healthy"
    }
    else if(25>c*c/d<29.9){
        return "You are Overweight"
    }
    else if(c*c/d<30){
        return "You are Obese"
    }
}




var marks=54;

function checkmarks(m){
    if(m>=90 && m<=100){
        return "A"
    }
    else if(m>=75){
        return "B"
    }
    else if(m>=50){
        return "C"
    }
    else if(m<=50){
        return "F"
    }
}

console.log("Final bill is "+checkamount(num2));
console.log(check(weight,hight));
console.log(checkmarks(marks));


