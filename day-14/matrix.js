function generateRandomArray(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0;j<col; j++){
            if(j==i){
                mat[i][j]=1;
            }
            else{
                mat[i][j]=Math.floor(Math.random()*50);
            }
        }
        console.log(mat[i]);
    }
}
const row=4;
const col=4;
generateRandomArray(row,col);