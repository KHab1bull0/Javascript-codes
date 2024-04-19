
function ikkiDaraja(num){
    if(num % 2 !== 0){return -1}
    let i = 0
    let dar = 0
    while(true){
        dar = 2 ** ++i
        if(dar > num || dar == num){
            return i
        }
    }
}

console.log(ikkiDaraja(8))


