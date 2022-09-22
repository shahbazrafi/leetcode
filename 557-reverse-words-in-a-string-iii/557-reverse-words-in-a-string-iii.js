/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = []
    s = s.split(" ")
    for (let j = 0; j < s.length; j++){
        let string = ""
        for (let i = s[j].length-1; i >= 0; i--){
            string+=s[j][i]
        }
        arr.push(string)
    }
    
    return arr.join(" ")
};