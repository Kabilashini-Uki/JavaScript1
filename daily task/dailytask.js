function culculateTrianglearea(height,base){
    let area=(base*height/2)
    return area
}
 function main(){
    let base=5;
    let height=10;

    let Area=culculateTrianglearea(height,base)
    console.log(Area)
 }
 main();


 function reversesting(num){
    let revers=Number(num.toString().split("").reverse().join(""));
    return parseInt(revers);
 }
 console.log(reversesting(736));

 

 function checkpalindrome(str){
    let reversed=str.split('').reverse().join('');
       return str===reversed
 }
 console.log(checkpalindrome("madam"))




