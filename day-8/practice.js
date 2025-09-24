//Search for an element in the array and return its index
     let numbers =[2,5,10,84,65];
     function findindex(numbers,elements){
        let searchfor=84
        for(let i=0; i<numbers.length;i++){
            if(number[i] == elements){
                return i;
            }
            else{
                return -1;
            }
        }
           console.log(numbers);
     }
     findindex(5)
   


// Calculate the average of the elements.

     function avarage(numbers){
            let sum=0;
    for (let i = 0; i < numbers.length; i++) {
              sum += numbers[i];
}
console.log(sum/numbers.length);
}
avarage(numbers);


//Write a function reverseArray() that reverses the order of the elements

      function reverseArray(numbers){
         let reversed = [];
         
  for (let i=array.length-1; i >= 0; i--) {
    //reversed.push(numbers[i]);
  }
 // return reversed


}
 console.log(reverseArray(i));
//reverseArray(numbers(i));

//function exists(element) that prints true if the element is present, otherwise false.

function exists(numbers, element){
      if (numbersincludes(element)){
        console.log("true")
      }
      else{
        console.log("fales")
      }
}
// exists(numbers);

//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.

function checkpalindrome(){

}

//sumOfDigi(number) that prints the sum of the given number.
function sum(numbers){
            let sum=0;
    for (let i = 0; i < numbers.length; i++) {
              sum += numbers[i];
}
console.log("The sumation of the arrey numbers are "+sum);
}
sum(numbers);




let array=[50,100,40,3,89,8,54,9];

function findindexinarray(array,numbers){
    let index="";
    for(let i=0; i<array.length; i++){
        if(array[i]==numbers){
            index+=(i+", ")
        }
    }
    return index
}
let indexvalue=findindexinarray(array,9);
if(indexvalue==-1){
     console.log("The number isn't found");
}
     else{
        console.log("The number is available in "+indexvalue+"index in the array")
     }
     findindexinarray(9)

function findavarage(arrey){
    let sum=0, avg=0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    avg=sum/array.length;
    return avg;
}     
console.log("The avarage of the array is "+findavarage(array));

      function reverseArray(array){
         let reversed = [];
         
  for (let i=array.length-1; i >= 0; i--) {
   

}
 //console.log(reverseArray(i));

 function reverseArray(array){
    for(let i=0; i<array.length; i++);{
      revarray[i]=array[array.length-1-i];
  }

return revarray;
    }
}
console.log("The original array values are "+array);
console.log("The reversed array values are "+reverseArray(array));




function checkpalindrome(word){

}
