function interestCalculator(amount, interestRate){
    let annualInterestRate= amount *(interestRate/100)*12
    return annualInterestRate
}
function main(){
    let amount=10000;
    let interestRate=3.5;

    let interest=interestCalculator(amount,interestRate);
    console.log("The annual InterestRate is "+ interest)
    
}
main()