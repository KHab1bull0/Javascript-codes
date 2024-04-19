

function countA(str){
    let words = str.split(' ')
    let count = 0
    for(let i = 0; i < words.length; i++){
        if(words[i].includes('a')){
            count++;
        }
    }

    return count;
}

console.log(countA('hello world salom dunyo arzon anor'))