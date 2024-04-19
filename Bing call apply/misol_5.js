
function sum(arr){
    return (String(arr.reduce((a, b) => a + b)).split('')).map(a => Number(a))
}

let arr = [1, 22, 3]
console.log(sum(arr))

