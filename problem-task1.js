/* Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. */

const text = "Hello World";

function reverseText(){
    let revStr = "";
    for(let i=text.length-1; i>=0; i--)
        revStr += text[i];
    return revStr;
}

const result = reverseText();
console.log(result);