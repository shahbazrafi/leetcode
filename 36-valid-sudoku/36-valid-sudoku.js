/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let empty
    let end
    function reset(){
        for (let i in empty){
            if (empty[i] > 1){
                end = false
            } 
        }
        empty = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        ".": -10
        }
    }
    reset()
//     rows
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            empty[board[i][j]]++
        }
        reset()
        if (end === false){
            return false
        }
    }
//  columns
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            empty[board[j][i]]++
        }
        reset()
        if (end === false){
            return false
        }
    }
//  box 1
    for (let i = 0; i <= 2; i++){
        for (let j = 0; j <= 2; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 2
    for (let i = 0; i <= 2; i++){
        for (let j = 3; j <= 5; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 3
    for (let i = 0; i <= 2; i++){
        for (let j = 6; j <= 8; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 4
    for (let i = 3; i <= 5; i++){
        for (let j = 0; j <= 2; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 5
    for (let i = 3; i <= 5; i++){
        for (let j = 3; j <= 5; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 6
    for (let i = 3; i <= 5; i++){
        for (let j = 6; j <= 8; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 7
    for (let i = 6; i <= 8; i++){
        for (let j = 0; j <= 2; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 8
    for (let i = 6; i <= 8; i++){
        for (let j = 3; j <= 5; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
//  box 9
    for (let i = 6; i <= 8; i++){
        for (let j = 6; j <= 8; j++){
            empty[board[i][j]]++
        }
    }
    reset()
    if (end === false){
        return false
    }
    
    
    
    return true

};