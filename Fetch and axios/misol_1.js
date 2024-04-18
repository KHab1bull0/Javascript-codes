
const url = `https://handlers.education.launchcode.org/static/planets.json`

async function  number(url){
    let arr = []
    const response = await fetch(url)
    // console.log(response.ok)
    if(response.ok){
        const json = await response.json()

        for(let i = 0; i < json.length; i++){
            arr.push(json[i].name)
        }
        return arr
    } 

}

number(url).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})