/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0
    for (let i = 0; i < nums.length; i++){
        total += nums[i]
    }
    let total2 = 0
    for (let i = 0; i < nums.length; i++){
        if (total2 === (total-nums[i])/2){
            return i
        }
        total2 += nums[i]
    }
    return -1
};