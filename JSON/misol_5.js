

let intInStr = (arr) => {

    let num = [1,2,3,4,5,6,7,8,9,0]
    let ansArr = []

    for(let i = 0; i < arr.length; i++){
        let check = 0

        if(arr[i]){
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j] in num ){
                    check = 1
                }
            }
        }

        if(check == 1){
            ansArr.push(arr[i])
        }
    }

    return ansArr
}


console.log(intInStr(["1a", "a", "2b", "b"]))

console.log(intInStr(["1a", "a", "2b2", "b",,,,,]))

console.log(intInStr(["1a", "a", "2b2", "b",,,,, "js1234"]))