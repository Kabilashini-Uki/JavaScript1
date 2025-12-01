// function maskcard(cardNumber){
//     return cardNumber
//     . split('_')
//     .map((part, index,arr)=>
//         (index<arr.length-1? '****' :part)
//     )
//     .join('_')
// }
// const input="2345_6789_0954_7465";
// const output=(maskcard(input));
// console.log(output);

function maskCard(CardNumber){
     let num=CardNumber.split('_')
     let arr=[]
    for (let i=0; i<num.length; i++){
        if(i<num.length-1){
            arr.push ('****')
        }
        else{
            arr.push (num[i])
        }
    }
    return arr.join('_')
}
const input="2345_6789_0954_7465";
const output=(maskCard(input));
console.log(output);