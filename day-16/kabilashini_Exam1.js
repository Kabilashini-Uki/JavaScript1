
//converting weight from pounds to kg
function poundsToKg(a) {
  return a * 0.453592; 
}
  let weightInKg = poundsToKg(150);


//converting height from cm to M
function cmToM(b){
     return b/100
}
let hightinM=cmToM(140)


//calculating BMI
function bmicalculator(a,b){
    let BMI=a/b*b
    return BMI
}
let bmi=bmicalculator(weightInKg,hightinM)

//calculating the stage in BMI using switch
  
switch (bmi) {
    case bmi < 18.5:
        console.log("Under Weight");
        break;
    case bmi >= 18.5 && bmi < 24.9:
        console.log("Normal");
        break;
    case bmi >= 25 && bmi < 29.9:
        console.log("Over Weight");
        break;
    case bmi >= 30:
        console.log("Obese");
        break;
    default:
        console.log("Invalid BMI value");
}

function main(){
console.log(weightInKg);
console.log(hightinM);
console.log("BMI ="+bmi);
}
main()

//function for fibonakki
 let a=0;
 let b=1
 let next;
function findfibonacci(num){
    if(num==0){
        return a
    }
    else if(num==1){
        return b
    }
    else{
        for (let i = 2; i < num; i++) {
        next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
    console.log(findfibonacci(i))
}  
findfibonacci(10)


