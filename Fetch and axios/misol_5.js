

let product = {
    nomi: 'Olma',
    miqdori: 12,
    narxi: 12000,

    get productinfo() {
        return this.nomi + ' ' + this.miqdori + 'kg' + ' ' + this.narxi + 'so\'m'
    },

    /**
     * @param {number} price
     */
    set setPrice(price){
        this.narxi = price
    },

}

product.setPrice = 13000
console.log(product.productinfo)


let tovar = product
tovar.setPrice = 15000
console.log(tovar.productinfo)





// Bular boshqa misol ekan ustoz qoshilib ketibdi didila
function findAllMethods(obj){
    return Object.getOwnPropertyNames(obj)
}
console.log(findAllMethods(tovar))
// lekin ishlashga harakat qildim

function invertKeyValue(obj){
    let ansObj = {}
    let n = Object.entries(obj)
    for(let i = 0; i < n.length; i++){
        ansObj[n[i][1]] = n[i][0]
    }
    console.log(ansObj)
}

invertKeyValue({
    red: 'Qizil',
    green: 'Yashil'
})