//Winning Degit
let row = 1;
let col = 8;

function winningDigit(row, col) {
  let mat = Array.from({ length: row }, () => new Array(col).fill(0));
  return mat;
}

function printMat(mat) {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]);
  }
}

function printMat1(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      mat[i][j] = Math.floor(Math.random() * 9) + 1;
    }
  }
  return mat;
}



//Player Digit
let rows = 1;
let cols = 8;

function PlayerDigit(rows, cols) {
  let mat = Array.from({ length: rows }, () => new Array(cols).fill(0));
  return mat;
}

function printMat(mat) {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]);
  }
}

function printMat1(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      mat[i][j] = Math.floor(Math.random() * 9) + 1;
    }
  }
  return mat;
}

let mat2= winningDigit(row, col);
mat2 = printMat1(mat2);
printMat(mat2);


function checkSame(){
    let same=[]
     for(let i =0; i<mat1.length; i++){
        for(let j=0; j<mat2.length;j++){
           if (mat1[0][i] == mat2[0][i]) {
               same.push(mat1[0][i]);
            }
        }
     }
     console.log(same);
}



function main(){
let mat1= winningDigit(row, col);
mat1 = printMat1(mat1);
printMat(mat1);

let mat2= winningDigit(row, col);
mat2 = printMat1(mat2);
printMat(mat2);

checkSame(mat1,mat2);
}

main()


let num=2025
function countNumber(n){
     let count=num.toString("").length
     return count
}
console.log("The given number is "+num);
console.log("Number of digits of number "+num+"is "+count)


