//top left

let i=5;
for(let j=1;j<=i; j++){
    let pattern="";
    for(let k=1; k<=j; k++){
        pattern+="* ";
    }
    console.log(pattern);
}
//method-02

for(let j=1;j<=i;j++){
    let pattern="* ";
    console.log(pattern.repeat(j));
}
//top right

let rows=5;
for(let i=1; i<rows; i++){
    let space="  ", star=" *";
    console.log(space.repeat(rows-i)+star.repeat(i));
}

//bottom left 
let row=5;
for(let j=row; j>=1; j--){
    let pattern=" ";
    for(let k=1; k<=j; k++){
        pattern+="* ";

    }
    console.log(pattern);
}
    for(let i=row; i>=1; i--){
        let pattern="* ";
        let space='  ';
        console.log(space.repeat(row-i)+pattern.repeat(i));
    }

  
