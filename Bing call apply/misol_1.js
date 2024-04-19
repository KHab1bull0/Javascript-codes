
function daraja(n){
    let i = 1
    let arr = []
    while(0 < n){
        arr.push(i*=2)
        n -= 1
    }

    console.log(arr)
}
daraja(4)
