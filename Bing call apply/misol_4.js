


function countNumber(str){
    if(typeof str == 'string'){
        let count = 0
        for(let i = 0; i < str.length; i++){
            let ascii = str[i].charCodeAt()
            if(ascii >= 48 && ascii <= 57){
                count++
            }
        }
        return count
    } else {
        return 'Input error'
    }
}

console.log(countNumber('asf23asdf34'))