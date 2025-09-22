let row=3;
let col=3;
let mat=randomArray(row,col);

function randomArray(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0))
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*10)
        }
    }
    return mat
}
function printmax(mat){
    for(let i=0; i<mat.length;i++){
        console.log(mat[i])
    }
}
printmax(mat);

/*function inversmat(mat){
    let reverse=[]
    for(let i=0; i<mat[0].length;i++){
        let row=[]
        for(let j=0; j<mat.length; j++){
            row.push(mat[i][j])

        }
           reverse.push(row)
    }
 return reverse
    
}
console.log(mat)

function printinverse(mat){
    
}*/
   
function invesment(mat){
    let matrix=Array.from({length:mat[0].length},()=>new Array(mat.length).fill(0))
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            matrix[j][i]=mat[i][j];
        }
    }
    return matrix;
}
let revmat=invesment(mat)
function printreverse(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
}
printreverse(revmat);