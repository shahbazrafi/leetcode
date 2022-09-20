/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length){
        return false
    }
    
    let objS = {}
    let arrS= []
    for (let i = 0; i < s.length; i++){
        if (objS[s[i]] === undefined){
            objS[s[i]]=i
            arrS.push(i)
        } else {
            arrS.push(objS[s[i]])
        }
    }
    let objT = {}
    let arrT= []
    for (let i = 0; i < t.length; i++){
        if (objT[t[i]] === undefined){
            objT[t[i]]=i
            arrT.push(i)
        } else {
            arrT.push(objT[t[i]])
        }
    }
    for (let i = 0; i < arrS.length; i++){
        if (arrS[i]!==arrT[i]){
            return false
        }
    }
    return true
};