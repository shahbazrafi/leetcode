/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let arr = [...heights]
    let run = true
    while(run){
        run = false
        for (let i = 0; i < heights.length-1; i++){
            if(heights[i+1] < heights[i]){
                let temp = heights[i+1]
                heights[i+1]=heights[i]
                heights[i]=temp
                run = true
            }
        }
    }
    let count = 0
    for (let i = 0; i < heights.length; i++){
        if (heights[i]!==arr[i]){
            count++
        }
    }
    return count
};