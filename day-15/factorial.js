
/*function findfactorial(num){
     let factorial=1
     for(let i=1; i<=num;i++){
        factorial += factorial*i
     }
     return factorial
}
console.log(findfactorial(5));*/
let num =4;

function findfactorialnumbers(num){
    let factorial=1;
    let pattern="";
    for(let i=1; i<=num; i++){
        factorial=factorial*i;
        pattern+=factorial+", ";
    }
    console.log(pattern);
}
findfactorialnumbers(num);



    for(let i=1; i<=10; i--){
        console.log(i)
    }



