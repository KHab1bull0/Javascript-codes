

class Magic {
    replace(a, b, str) {
        let ans = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] == a) {
                ans += b
            } else {
                ans += str[i]
            }
        }
        console.log(ans)
    }

    length(any) {
        if (typeof any == 'string') {
            console.log(any.length)
        } else if (Array.isArray(any)) {
            console.log(any.length)
        } else if (typeof any === 'object'){
            console.log(Object.keys(any).length)
        } else{
            console.log(undefined)
        }
    }

    toUpperCase(str){
        let ans = ''
        for(let i = 0; i < str.length; i++){
            let upper =  str[i].charCodeAt()
            
            if(upper >= 97 && upper <= 122){
                ans += String.fromCharCode(upper-32)
            } else {
                ans += String.fromCharCode(upper)
            }
        }
        console.log(ans)
    }
}

let magic = new Magic()
// magic.replace('t', 'l', 'hotam')
// magic.length('asdf')
// magic.length([1,2,3])
// magic.length({l:1})

magic.toUpperCase('salom hammaga')

