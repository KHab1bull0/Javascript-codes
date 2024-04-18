

function findSquere(num){

    let strNum = num + ''
    let ans = ''

    for(let i = 0; i < strNum.length; i++){
        ans += strNum[i] ** 2
        // console.log(strNum[i])
    }
    console.log(Number(ans))
}

findSquere(3219)

