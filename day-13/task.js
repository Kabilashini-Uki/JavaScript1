/*function generateRandomArray(rows,cols){
    let array=[]
    for(let i=0; i<rows.lenth;i++){
        let rows=[]
        for(let j=0;i<cols.lenth;j++){
            let random=Math.floor(Math.random()*50)
            rows.push(random)
        }
        array.push(rows)
    }
    return array
}
let random2d=generateRandomArray(5,10);
console.log(random2d);*/

/*const rows=5;
const cols=10;
const num=Array.from({length:rows}, ()=> new Array(cols).fill(Math.floor(Math.random()*50)))
//console.log(num)
for(let i=0; i<rows.length;i++){
    let random=Math.floor(Math.random()*50);
    rows.push(random)
    //console.log(num[i]);
}
for(let i=0;i<random.length;i++){
    let string=""
    for(let j=0;j<random[0].length;j++){
        string+=" "+random[i][j]+",";
    }
    console.log(random(string))
}*/
/*function main(){
    let rows=10, cols=5
    let matrix=generateRandomArray(rows, cols)
    console.log("\nyour genarated matrix is");
    (matrix);
    console.log("\nThe maximum value in each row in givenmatrix are ");
    findmaxInEachRow(matrix);
}
main();*/

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
let random2DArray = generateRandomArray(5, 10);


/*for (let i = 0; i < random2DArray.length; i++) {
    for (let j = 0; j < random2DArray[i].length; j++) {
        console.log(random2DArray[i][j]);
    }
}*/
for (let i = 0; i < random2DArray.length; i++) {
    console.log(random2DArray[i].join(" "));
}
for(let i=0;i<random2DArray.length;i++){
    let row=random2DArray[i];
  
    let large=row[0];
    for(let j=0;j<row.length;j++){
        if(row[j]>large){
            large=row[j];
        }
    }
    console.log(" The largest number in row "+(i+1)+"is = "+large)
}

