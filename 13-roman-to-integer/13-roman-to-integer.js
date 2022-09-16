/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    split = s.split("")
    let obj = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    }
    
    let total = 0
    let j = "M"
    for (let i = 0; i < split.length; i++){
        if(obj[split[j]] < obj[split[i]]){
            total += obj[split[i]]-(obj[split[j]]*2)
        } else {
            total += obj[split[i]]
        }
        j = i
    }
    
    return total
};