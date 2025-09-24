var letter="a";
var vowel= "a"||"e"||"i"||"o"||"u";
function checkletter(){
    if(letter==vowel){
        console.log("It is a vawel letter ")
    }
    else{
        console.log("it isn't a vowel letter")
    }
}
checkletter();
function checknum(num){
   let reversed=0
      let count=0;
    while(num>0){
       let degit= num%10;
        reversed=reversed*10 + degit
        num=Math.floor(num/10);
        count++;
    }
    console.log("total itteration is "+count)
    return reversed;
}


console.log(checknum(54775942164541));



function genaratenumber(){
     let array=[];
     let length=10;
     for(let i=0; i<length;i++){
        let randomnumber=Math.floor(Math.random()*10);
        array.push(randomnumber);
     }
     return array
}


function sumarray(array){
      let sum=0;
      for(let i=0; i<array.length;i++){
        sum += array[i];
}
return sum;
}

let randomarray=genaratenumber();
console.log(randomarray)
console.log("sumation of arrays = "+sumarray(randomarray));

//finding the same number in an array

/*function findnumber(){
    let num1=[];
    let count=[]
     for(let i=0; i<length;i++){
      let copy=array[i];
      if(count(copy)){
        if(!num1.includes(copy)){
            num1.push(copy);
        }
        
      }
      else{
        count(copy)=true
      }
     }

}*/
function findsamenumbers(array){
    let findsamenumber=array[0];
    for(let i=0; i<length;i++){
        for(let j=0; j<genaratenumber.length;j++){
            if(findsamenumber[j] !=array[i]){
                findsamenumber.push(array[i])
            }

        }
    }
    console.log(findsamenumber)
}
randomarray=genaratenumber();
findsamenumbers(genaratenumber);











 

