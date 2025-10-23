function traditional(num1,num2){
    return num1+num2
}

const traditional1=(num1,num2)=>(num1+num2);

function main(){
    let num1=10;
    let num2=90;

    console.log("This is a traditional method to sum "+ num1+" and "+num2+"= "+traditional(num1,num2))
}
main()

function alineSentense(){
    let sentence="response best than reaction"
    let word=sentence.split(' ');
    let newPrase=[];

    for(let i=0; i<word.length;i++){
        if(i==0){
            newPrase.push(word[2])
        }
        else if(i==1){
            newPrase.push(word[3])
        }

        else if(i==2){
             newPrase.push(word[0])
        }
         else if(i==3){
             newPrase.push(word[1])
        }
    }

    let newSentence= newPrase.join(" ")
    newSentence=newSentence[0].toUpperCase()+newSentence.slice(1);
    

    console.log(newSentence)
}
alineSentense()