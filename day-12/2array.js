/*let array=[
    [68,89,47],
    [52,85,15],
    [56,52,64]
];
for(let i=0; i<array.length;i++){
  console.log(array[i])
     
}*/
  /*const rows=3;
  const cols=4;
  const num=Array.from({length: rows},()=>new Array (cols).fill(Math.floor(Math.random()*10)));
  console.log(num);
  for(let i=0; i<num.length;i++){
    console.log(num[i]);
  }
  for(let i=0;i<num.length;i++){
    let string="";
    for(let j=0; j<num[0].length;j++){
    string+=" "+num[i][j]+","
    }
    console.log(string);
  }*/
  /*function createrandom2darray(rows,cols){
    let array=;
    for(let i=0;i<rows;i++){
        let rows=[]
        for(let j=0;j<cols;j++){
           let random=Math.floor(Math.random()*50)
           rows.push(random)
        }
        array.push(rows)
    }
    return array
  }
  let max1=createrandom2darray(3, 4)
   let max2=createrandom2darray(3, 4)
 console.log(max1)
 //console.log(max2)
  

  for(let i=0; i<max1.length;i++){
    console.log([i]);
  }
  for(let i=0;i<max1.length;i++){
    let string="";
    for(let j=0; j<[0].length;j++){
    string+=" "+max1[i][j]+","
    }
    console.log(string);
  }*/

    function random2darray(rows,cols){
        let mat=Array.from({length: rows},()=>new Array (cols).fill(0));
        for(let i=0; i<rows;i++){
            for(let j=0;j<cols;j++){
                mat[i][j=Math.floor(Math.random()*10)]
            }
        }
        return mat;
    }
function printmax(mat){
    for(let i=0;i<mat.length;i++){
        console.log(mat[i]);
    }
}
function sumofmax(mat1,mat2){
    let sumMax=Array.from({length: mat1.length},()=>Array(mat1[0].length.fill(0)));
    for(let i=0;i<mat1.length;i++){
    for(let j=0;j<mat1[o].length;j++){
        sumMax[i][j]=mat1[i][j+mat2[i][j]]
    }
    }
    return sumMax;
}
let rows=3;
let cols=4;
let mat1=random2darray(rows,cols);
let mat2=random2darray(rows,cols);

console.log("matrix 1 is");
printmax(mat1);
console.log("matrix 2 is")
printmax(mat2);

console.log("summation of both matrix is ");
let sumMat=sumofmax(mat1, mat2);
printmax(sumMat);

   
 