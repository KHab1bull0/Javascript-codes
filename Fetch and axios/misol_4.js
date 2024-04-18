
// 4 -> https: /jsonplaceholder.typicode.com/todos todos dagi barcha juft id dagi todolarning hammasni qaytarib bervuchi dastur tuzing!

const url = `https://jsonplaceholder.typicode.com/todos`

async function getId(url){

    const response = await fetch(url)
    if(response.ok){
        const json = await response.json()
        let juftusers = []
        for(let user of json){
            if(user.id % 2 == 0){
                juftusers.push(user)
            }
        }
        return juftusers
    } else {
        return `Xatolik ...`
    }
}

getId(url).then( data => {
    console.log(data)
}).catch( error => {
    console.log(error)
})
