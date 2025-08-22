//if the maeks is grater than and equal to 50 then print pass else print fail.

var marks=40;

function checkmarks(Marks){
    if(marks>=50){
    console.log("Pass")
}
else{
    console.log("Fail");
}

}
checkmarks();

let color="yellow"

function traficlightcolor(color){
       if(color=="red"){
        return "stop"
       }

       else if(color=="yellow"){
          return "slow down"
       }

       else if(color=="green"){
        return "go"
       }
          
       }

       console.log(traficlightcolor(color));

