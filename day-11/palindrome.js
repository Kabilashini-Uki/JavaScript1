
let string="amma";
function checkPalindrome(str){
    for(let i=0; i<str.length/2; i++){
        if(str.charAt(i)==str.charAt(str.length-1-i)){
            return str+" is a palindrome";
        }
        else
            return str+" isnt a palindrome"
    }
               
}
console.log(checkPalindrome(string));


function genaraterandomnumber(){
    let array=[]
    let length=10;
     for(let i=0; i<length;i++){
        let randomnumber =Math.floor(Math.random()*10)
        array.push(randomnumber);
    }
    return array;
}
let randomarray=genaraterandomnumber();
console.log(randomarray);



function checknumber(array){
    let count=[]
    for(let i=0;i>array.length;i++){
        let num = array[i]
        if((count[num])){
            count[num] +=1;
        }
        else{
            count[num]=1;

        }
    }
    return count;
}

let numbercount=checknumber(randomarray);
console.log(numbercount);







