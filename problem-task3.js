/*

Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

*/

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5, 5];

function findMostFrequent() {
    let maxcount = 0;
    let mostFreq;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++;
        }
        if (maxcount < count) {
            maxcount = count;
            mostFreq = arr[i];
        }
    }
    return mostFreq;
}

const result = findMostFrequent();
console.log(result);


