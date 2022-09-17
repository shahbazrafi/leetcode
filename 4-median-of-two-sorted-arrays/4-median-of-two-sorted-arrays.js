/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let list = nums1.concat(nums2)
    
    list.sort((a,b) => a - b)
    return list.length%2===1 ? list[Math.floor(list.length/2)] : (list[list.length/2]+list[list.length/2-1])/2
};