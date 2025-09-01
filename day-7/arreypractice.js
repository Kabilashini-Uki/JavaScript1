//create a initialized empty Arrey
let numbers = [];

//add an element in a specific index
function addanelement( numbers, index,value){
if (index<0 || index>=numbers.lengh ){
    console.log("Invalid index value");
}
else{
    numbers.splice(index,0,value);
    console.log("New array = "+numbers);
}
}
addanelement(numbers,0,5);

//printing all elements by creating function printallelement for the Arrey.
function printallelements(){
    console.log(numbers);
}
printallelements();

//print a selecter range of elements of the Arrey
function printRange(numbers, start, end){
    if(start>0 || end<=numbers.lengh){
        console.log("Invalid start and end ")
    }
    else{
        for(let i=start; i>=length; i++)
            console.log(numbers[i]);
    }
}
printRange(numbers, 2, 5);

//adding a new element in the end
function addatlast(numbers, element){
  // numbers.push(50)
    //console.log(numbers);
    numbers. push(element);
    return(numbers)
    console.log(element+" is add to the Arrey");
}
//addatlast(numbers);
numbers=addatlast(numbers,45);
console.log(numbers);


//Remove an element at the specific index
function removeat(){

}
//finding a largest number in a Arrey

function findlargrst(numbers){
       let max=numbers[0];
       for(let i=1; i<numbers.length; i++){
        if(max<numbers[i]){
            max=numbers[i];
        }
       }
       console.log("The maximum value in this Arrey is "+max)
}
findlargrst(numbers);


//sumation of all the arrey numbers
function sum(numbers){
            let sum=0;
    for (let i = 0; i < numbers.length; i++) {
              sum += numbers[i];
}
console.log("The sumation of the arrey numbers are "+sum);
}
sum(numbers);
