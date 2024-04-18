

function move(arr, n1, n2){
    let first = arr[n1]
    let second = arr[n2]
    let ans = []
    for(let i = 0; i < arr.length; i++){
        if(i == n1){
            ans.push(arr[n2])
        } else if(i == n2){
            ans.push(arr[n1])
        } else {
            ans.push(arr[i])
        }
    }
    return ans
}

console.log(move([1,2,3,4,5,6], 0,2))