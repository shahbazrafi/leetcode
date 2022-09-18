/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    for (let i = 0; i < matrix.length; i++){
        let obj = {}
        for (let i = 1; i < matrix.length +1; i++){
            obj[i] = 0
        }
        for (let j = 0; j < matrix.length; j++){
            obj[matrix[i][j]]++
        }
        for (let k in obj){
            if (obj[k] !== 1){
                return false
            }
        } 
    }
    for (let i = 0; i < matrix.length; i++){
        let obj = {}
        for (let i = 1; i < matrix.length +1; i++){
            obj[i] = 0
        }
        for (let j = 0; j < matrix.length; j++){
            obj[matrix[j][i]]++
        }
        for (let k in obj){
            if (obj[k] !== 1){
                return false
            }
        }
    }
    return true
};