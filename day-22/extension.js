// function findExtension(file) {
//     let extension = '';
//   

//     for (let i = 0; i < file.length; i++) {
//         if (file[i] === '.') {
//           return false
//         } else {
//             extension += file[i]; 
//         }
//     }

//     return extension;
// }
// console.log("document.txt")

function getFileExtension(file) {
  const parts = file.split('.');      


  if (parts.length === 1) {
    return '';
  }

  return parts[parts.length - 1];     
}


console.log(getFileExtension("document.txt"));   

function FileExtension(file){
    let extension=file.split('.').pop();
    return extension
}
  function main(){
    let output="Document.txt"
    console.log(FileExtension(output))
  }
  main()


function printIndex(){
    mat=['C','A','t'],
        ['O','N','G'],
        ['T','T','V']

       let str="CAT" 

        for(let i=0; i< str.length; i++){
            for(let j=0; j<mat.length;j++){
               for(let k=0; k<mat[0];k++){
                if(str[i]==mat[j][k]){

                }
               }
                }
            }
        }
        return false

console.log(printIndex('C'))

