/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    let obj = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    let string = ""
    while (num > 0){
        for (let i in obj){
            if (num/obj[i] >= 1){
                string += i
                num-=obj[i]
                break
            }
        }
    }
    return string
};