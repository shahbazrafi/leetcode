/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    let obj2 = {
        "Billion":1000000000,
        "Million":1000000,
        "Thousand":1000,
        "":1
    }
    let obj = {
        "Nine Hundred":900,
        "Eight Hundred":800,
        "Seven Hundred":700,
        "Six Hundred":600,
        "Five Hundred":500,
        "Four Hundred":400,
        "Three Hundred":300,
        "Two Hundred":200,
        "One Hundred":100,
        Ninety:90,
        Eighty:80,
        Seventy:70,
        Sixty:60,
        Fifty:50,
        Forty:40,
        Thirty:30,
        Twenty:20,
        Nineteen:19,
        Eighteen:18,
        Seventeen:17,
        Sixteen:16,
        Fifteen:15,
        Fourteen:14,
        Thirteen:13,
        Twelve:12,
        Eleven:11,
        Ten:10,
        Nine:9,
        Eight:8,
        Seven:7,
        Six:6,
        Five:5,
        Four:4,
        Three:3,
        Two:2,
        One:1
    }
    if (num === 0){
        return "Zero"
    }
    let arr = []
    let pushDegree
    for (let j in obj2){
        let num2 = Math.floor(num/obj2[j])
        while (num2 > 0){
            for (let i in obj){
                if (num2/obj[i] >= 1){
                    arr.push(i)
                    num2-=obj[i]
                    num-=obj[i]*obj2[j]
                    pushDegree = true
                    break
                }
            }
        }
        if (pushDegree){
            arr.push(j)
            pushDegree=false
        }
    }
    return arr.join(" ").trim()
};