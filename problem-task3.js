/*

Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

*/

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5,5];

function findMostFrequent() {
    let count = {};
    for (let item of arr) {
        if (count.hasOwnProperty(`${item}`))
            count[item] = count[item] + 1;
        else
            count[item] = 1;
    }
    const keys = Object.keys(count);
    const values = Object.values(count);
    const index = values.indexOf(Math.max(...values));
    const findFreq = Number(keys[index]);
    return findFreq;
}

const result = findMostFrequent();
console.log(result);


