// Create a function that checks if a number is even or odd.
const checkEvenOdd =(num:number):string=>{
    if(num%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(checkEvenOdd(4)); // Output: Even