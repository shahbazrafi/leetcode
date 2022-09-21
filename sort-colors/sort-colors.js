/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let minimumIndex = i
        for (let j = i+1; j < nums.length; j++){
            if (nums[j] < nums[minimumIndex]){
                minimumIndex = j
            }
        }
        let temp = nums[i]
        nums[i]= nums[minimumIndex]
        nums[minimumIndex]= temp
    }
};