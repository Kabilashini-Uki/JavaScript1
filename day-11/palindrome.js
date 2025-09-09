
let str="amma";
function checkPalindrome(str){
    for(let i=0; i<str.length/2; i++){
        if(str.charAt(i)==str.charAt(str.length-1-i)){
            return str+" is a palindrome";
        }
        else
            return str+" isnt a palindrome"
    }
               
}
console.log(checkPalindrome(str));


function genaraterandomnumber(){
    let array=[]
    let length=10;
    let uniquenumbers=[];
    for(let i=0; i<length;i++){
        let randomnumber =Math.floor(Math.random()*10)
        array.push(randomnumber);
    }
    return array;
}

let randomarray=genaraterandomnumber();
console.log(randomarray)

function checknumber(array){
    let count=[]
    for(let i=0;i>array.length;i++){
        array(count)==(array[i])
    }
}






