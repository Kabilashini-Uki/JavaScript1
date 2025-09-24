
function main(){
let A=[[1,3,4], [4,5,6], [8,4,6,], [8,9,6,4]];
let B=[[3,5,7,8,7], [8,5,2,5,8], [5,6,2,5,5]];
let output = matrixMulti(A,B)
printmatrix(output);

}
main();
function canDoMultiblication(a,b){
    if(a[0].length==b.length){
        return true
    }
    else{
        return false
    }
}


function matrixMulti(a,b){
    if(canDoMultiblication(a,b)){
        let row=a.length;
        let col=b[0].length;
        let colrow=b.length
        let sum=0;
        let output =Array.from({length:a.length},()=>new Array(b[0].length).fill(0));
        for(let i=0; i<row;i++){
            for(let j=0;j<col; j++){
                for(let k=0;k<colrow; k++){
                    sum+=(a[i][k]*b[k][j]);
                }
                output[i][j]=sum;
            }
        }
        return output;

    }
    else{
        console.log("can not do the multiplication because the column value of matrix a snd row value of matrix b is different")
        return 0;
    }
}
function printmatrix (a){
    for(let i=0;i<a.length;i++){
        console.log(a[i]);
    }
}

