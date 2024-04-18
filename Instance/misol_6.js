
function difference(arr1, arr2){
    let fullArr = [...arr1.flat(3), ...arr2.flat(3)]
    let seti = new Set(fullArr)
    let ans = Array.from(seti)
    return ans
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))