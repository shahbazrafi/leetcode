/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let max = 0
    for (let i = 0; i < nums1.length-max; i++){
        for (let j = 0; j < nums2.length-max; j++){
            let temp = 0
            while (nums1[i+temp] === nums2[j+temp] && j+temp < nums2.length){
                temp++
                if (temp > max){
                    max = temp
                    }
            }
        }
    }
    return max
};