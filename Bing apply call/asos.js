

const obj = {
    name: 'anvar',
    surname: 'anvarov',

    fullname(age){
        console.log(`${this.name} ${this.surname} ${age}`)
    }
}

// obj.fullname('12')

const obj2 = {
    name: 'ahror',
    surname: 'ahrorov',
    age: 12
}

// obj.fullname.apply(obj2, [12])

function fullname(age){
   console.log(`${this.name} ${this.surname} ${this.age}`)
}

// fullname.apply(obj2)


const car = {
    name: 'BMW',

    run(){
        console.log(this.name)
    }
}