

function unique(arr){
    let unique = new Set(arr)
    let ans = Array.from(unique)
    return ans
}

console.log(unique([1, -2, -2, 3, 4, -5, -6, -5]))