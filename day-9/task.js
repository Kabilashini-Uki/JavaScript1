function sum(a,b){
    return a+b
}
let output= sum(9,7);
console.log("sumation = "+output);

//assining a numbers

//let num1,num2,num3;
num1=10;
num2=40; 
num3=83;

function sum(a,b){
    let sum=(a+b)
    return sum
}
let result1//=sum(10,40,83,50);
//console.log("sumation = "+result1);
result1=sum(num1,sum(num2,num3));

console.log("Num1 is "+num1+", Num2 is "+num2+", Num3 is "+num3+", The summation of this three numbers is "+result1);


let num4,num5,num6;
num4=3;
num5=7;
num6=9;
num7=5;

function summation(c,d){
    let summation=(c+d)
    return summation
}
let total;
total=summation(summation(num4,num5),summation(num6,num7));
console.log("The summation of four numbers is = "+total)

//PALINDROME "AMMA"

let str="AMMA"
function ispalindrome(str){
    let ispalin = true;
      for (let i = 0; i < (str.length/2) ; i++){
        if(str.charAt(i)!=str.charAt(str.length-1-i)){
            ispalin=fales
        }
      }
      return ispalin;
}
if (ispalindrome(str))
console.log("Yes, "+str+" is palindrome word")
else
    console.log(" no "+str+" isn't a palindrome word")