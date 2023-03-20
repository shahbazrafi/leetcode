/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0
    let previous1 = 0
    let previous2 = 1
    flowerbed = [0,...flowerbed,0]
    for (let i = 1; i < flowerbed.length ; i++){
        if (previous1 === 0 && previous2 === 0 && flowerbed[i] === 0){
            count++
            previous2=1
            previous1=flowerbed[i]
        } else {
            previous2=previous1
            previous1=flowerbed[i]
        }
    }

    if (n <= count){
        return true
    } else {
        return false
    }
};