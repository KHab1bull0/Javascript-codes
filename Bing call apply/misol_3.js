
function objDaraja(n, res){
    for( i in res){
        res[i] = res[i] * n
    }
    return res
}


const obj = {a: 2, b: 3, c: 4}

console.log(objDaraja(3, obj))