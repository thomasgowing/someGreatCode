console.log(fibSequence(376));

function fibSequence(x){
    if(x <= 0){
        return "Give me a larger number!";
    }
    let numList = "0";
    let prev = 0;
    let current = 1;
    let result = 1;
    while(x >= current){
        numList = numList + "," + result.toString();
        result = prev + current; 
        prev = current;
        current = result;
    }
    return numList;
}