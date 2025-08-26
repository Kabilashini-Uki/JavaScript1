 function addnumbers(){
        let sum=0;
        let count=0;
        let randomnum=0;

        while(randomnum!=5){
            randomnum=Math.floor(Math.random()*1000)
            console.log(randomnum);
            sum+=randomnum;
            count++;
        }
        console.log("Total value is "+sum);
        console.log("Count value is "+count)
    }
    console.log(addnumbers());