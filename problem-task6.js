
/*
Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

*/
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz"+"0123456789"+"!@#$%&*?";

const generatePasskey =() =>{
    const passLen = 10;
    let pass = "";

    for(let i=0;i<passLen; i++){
        const num = Math.floor(Math.random() * str.length+1);
        pass += str.charAt(num);
    }
    return pass;
}
console.log(generatePasskey());
