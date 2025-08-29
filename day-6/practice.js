// programme to print factorial series
function printFactorialseries(n){
let fact=1;
let series="";

for(i=1;i<=n;i++){
  fact*=i
  series += fact + ", ";
}
 console.log(series);
}
printFactorialseries(5)
 

function printFibonacciseries(n){
    let fibo=1;
    let series="";
    for(i=1;i<=n;i++){
        fibo+=i
        series+= fibo + ", ";

    }
    console.log(series);
}
printFibonacciseries(5)

function Fibonacciseries(n){
    if(n==1){
        console.log(0,1);

    }
    else if(n==2){
           console.log(0,1)
    }
    
    else if(n>2){
        let a=0; b=1;
        let c;
        for(let i=3; i<=n;i++){
              c=a+b;
            seriesFibo+=(", "+c);
            a=b;
            b=c;
        }
    }
    console.log(seriesFibo);
}
Fibonacciseries(5);

