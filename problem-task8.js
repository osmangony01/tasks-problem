/*
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

*/

const arr = [1, 5, 2, 4, 7, 31, 8, 11, 70, 35, 14, 12, 3, 38];

const findSecondNum = () => {
    let fl=0;
    let sl = 0;
    for(let e of arr) {
        if(fl<e)
            fl = e;
        if(e<fl && sl<e)
            sl = e;   
    }
    return sl;
}

console.log(findSecondNum());