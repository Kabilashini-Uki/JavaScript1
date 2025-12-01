var str="javascript";
var word="";
function reversestr(str){
    for(let i=str.length; i>=0; i--){
        word+= str.charAt(i);
    }
    console.log(word)
}

reversestr(str);

var letter="kabilashini"
var vow=[];
function countVowels(letter){
     for(let i=0; i<letter.length;i++){
        if(letter.charAt(i)=="a"||letter.charAt(i)=="e"||letter.charAt(i)=="i"||letter.charAt(i)=="o"||letter.charAt(i)=="u"){
            vow.push(letter.charAt(i))
        }
     }
     return ""+vow
}
console.log(countVowels(letter));

var num=10;
var count=[];
function printNumber(num){
    for(let i=1;i<=num; i++){
       count.push(i)
    }
    return ""+count;
}
console.log(printNumber(num))

var cell="appa"
function checkpalindrome(cell){
   for(let i=0;i<cell.length;i++){
    if(cell.charAt(i)==cell.charAt(cell.length-1-i)){
        return "it's palindrome"
    }
    else{
        return "isn't palindrome"
    }
   }
}
console.log(checkpalindrome(cell))

var age=20;
function ckeckForVote(age){
    if(age>=18){
        return "eligible to vote"
    }
    else{
        return "isn't eligible"
    }
}
console.log(ckeckForVote(age));

let num1=128;
function reverseNum(num){
    let revnum=0
    while(num>0){
        revnum*=10;
        revnum+=(num%10);
        num=Math.floor(num/10);
    }
    return revnum;
}
console.log(reverseNum(num1))


function checkfibonacci(num){
    let a=0;
    let b=1;
    let next=0;
    if(num==0){
        console.log("false")
    }
    else if(num==1){
        console.log(a)
    }
    else{
        console.log(a);
        console.log(b);
        for(let i=2; i<num;i++){
          next=a+b;
          console.log(next);
          a=b;
          b=next;
        }

    }
}
checkfibonacci(5);


function printFirstAndLast(word){
    console.log(word.charAt(0));
    console.log(word.charAt(word.length-1))
}
printFirstAndLast("hii")