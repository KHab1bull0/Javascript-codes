

const url = `https://jsonplaceholder.typicode.com/posts?userId=1`
const id = `https://jsonplaceholder.typicode.com/users/1`

async function getById(URL, ID){
    let user = []

    const response = await fetch(URL)
    const idUser = await fetch(ID)
    const json = await response.json()
    const idJson = await idUser.json()

    for(let i = 0; i < json.length; i++){
        if(json[i].id == idJson.id){
            return {
                Author: idJson.name,
                City: idJson.address.city,
                Company: idJson.company.name,
                Title: json[i].title
            }
        }    
    }


}

getById(url, id).then( data => {
    console.log(data)
}).catch( err => {
    console.log(err)
})