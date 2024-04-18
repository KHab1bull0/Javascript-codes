


let countAll = (str) => {
    let letter = 0
    let number = 0

    for(let i = 0; i < str.length; i++){
        let asciicode = str[i].charCodeAt()
        console.log(asciicode)
        
        if(48 <= asciicode && 57 >= asciicode){
            number++
        }

        if(asciicode >= 65 && asciicode <= 90 || asciicode >= 97 && asciicode <= 122){
            letter++
        } 

    }

    return {'Harflar: ': letter, 'Sonlar: ': number}
}   

console.log(countAll('123456'))