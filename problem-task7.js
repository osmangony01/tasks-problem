/*

Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

*/

const romanValue = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};

const romanToInt = (str) =>{
    let result =0;
    let val = 0;

    for(let i =0; i<str.length; i++){
        val = romanValue[str[i]];
        if(i<str.length-1){
            let nextVal = romanValue[str[i+1]];
            if(val<nextVal){
                val = nextVal-val;
                i+=1;
            }
        }
        result += val;
    }
    return result;
}

const romanStr = "VIII";
const res = romanToInt(romanStr);
console.log(res);



// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     var dict = {
//       'I':1,
//       'V':5,
//       'X':10,
//       'L':50,
//       'C':100,
//       'D':500,
//       'M':1000
//     };
    
//     var result = 0;
//     var intVal = 0;
//     var nextIntVal = 0;
//     for (var i = 0; i < s.length; i++) {
//         intVal = dict[s[i]];
        
//         if(i!=s.length-1)
//         {
//             nextIntVal = dict[s[i+1]];
//             if(nextIntVal>intVal){
//                 intVal = nextIntVal-intVal;
//                 i = i+1;
//             }
//         }
//         result = result + intVal;
//     }
//     return result;
// };