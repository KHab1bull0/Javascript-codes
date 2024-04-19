// 1 - usul bu usulda belgilarni hisobga olmaydi
function minSoz(str) {
    let words = str.trim().split(' ')
    return (words.sort((a, b) => a.length - b.length))[0]
}



// 2 - usul belgilarni ham hisoblab faqat sozlarni kichikini qaytaradi
function minWord(str) {
    let words = str.trim().split(' ')
    let symbol = [',', '.', '?', '!', '/', '\\', '$', '#', '@', '(', ')']

    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < symbol.length; k++) {
            if (words[i].includes(`${symbol[k]}`)) {
                words[i] = words[i].replace(`${symbol[k]}`, '')
            }
        }
    }
    return (words.sort((a, b) => a.length - b.length))[0];
}


let sentence1 = `hello world python java php js`
let sentence2 = `hello world, python java, php (js?)    `

console.log(minSoz(sentence1))
console.log(minWord(sentence2))