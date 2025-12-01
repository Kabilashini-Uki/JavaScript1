function countLetter(){
    let sentense=("vigadakavi Told me to Scold him")
    let sent=sentense.split(" ") .join("").toLowerCase()

    let str= new Set()

    for(let i=0; i<sent.length; i++){
        if(str.has(sent[i])){
            continue;
        }
        str.add(sent[i])
        
        let count=0;
        for(let j=0; j<sent.length;j++){
            if(sent[i]==sent[j]){
                count++
            }
        }
        console.log(sent[i]+" = "+ count)
    }
}
countLetter()