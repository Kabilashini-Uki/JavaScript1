function generateRandomArray(rows, cols) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        let row = [];   
        for (let j = 0; j < cols; j++) {
            let random = Math.floor(Math.random() * 50); 
            row.push(random);
        }
        array.push(row);
    }
    return array;
}
let random2DArray = generateRandomArray(5, 5);
console.log(random2DArray)
for (let i = 0; i < random2DArray.length; i++) {
    console.log(random2DArray[i].join(" "));
}
function FindAverage(rows){
    for(let i=0;i<rows.length;i++){
       let sumvalue=0
       for(let j=0;j<rows[0].length;j++){
        sumvalue+=rows[i][j];
       }
    }
    console.log("The average is= "+FindAverage(sumvalue)[i][j])
}
