/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let total = 0
    for (let i = 0; i< mat.length; i++){
        total+= mat[i][i]
        total+= mat[i][mat.length-i-1]
    }
    if (mat.length%2===1){
        total -= mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
    }
    return total
};