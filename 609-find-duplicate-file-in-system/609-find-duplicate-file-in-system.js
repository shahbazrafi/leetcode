/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let obj = {}
    for (path of paths){
        let arr = path.split(" ")
        for (let i = 1; i < arr.length; i++){
            let file = arr[i].split("\(")
            file[1] = file[1].replace(")","")
            if (obj[file[1]]){
                obj[file[1]].push(arr[0]+"/"+file[0])
            } else {
                obj[file[1]]=[arr[0]+"/"+file[0]]
            }
        }
    }
    let result = []
    for (let i in obj){
        if (obj[i].length>1){
            result.push(obj[i])
        }
    }
    return result
};