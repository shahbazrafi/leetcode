/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let arr = []
    for (let i = 0; i < queries.length; i++){
        nums[queries[i][1]] += queries[i][0]
        let temp = 0
        for (let j = 0; j < nums.length; j++){
            if(nums[j]%2===0){
                temp+=nums[j]
            }
        }
        arr.push(temp)
    }
    
        
    
    
    return arr
};