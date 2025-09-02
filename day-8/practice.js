//Search for an element in the array and return its index
     let numbers =[2,5,10,84,65];
      console.log(numbers[3]);


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
         
  for (let i=0; i >= 0; i--) {
    reversed.push(numbers[i]);
  }
  return reversed


}
 console.log(reverseArray(numbers));
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