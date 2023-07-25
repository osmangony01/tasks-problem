/*
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

*/

const arr = [2, -5, 10, -3, 7];

function sumPositive(){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            total += arr[i];
        }
    }

    return total;
}

const result = sumPositive();
console.log(result);