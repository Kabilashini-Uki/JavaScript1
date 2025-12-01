function genaraterandomnumbers(num){
     return Math.floor(Math.random()*99,999)+1
     
}
function checkPrimeNumber(num){
    if(num<=1){
        return false
    }
    for(let i=2; i<num; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
function main(){
    let random=genaraterandomnumbers()
        console.log(random)

    if(checkPrimeNumber(genaraterandomnumbers())==true)
        console.log("This number is prime")
    else
        console.log("This number isn't prime")
       
}
main()