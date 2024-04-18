

class Box {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    getVolume() {
        return this.length * this.width * this.height
    }
}

let box = new Box(5, 10, 10)
// console.log(box.getVolume())

let box2 = new Box(3, 5, 15)
let box3 = new Box(2, 10, 20)



function totalVolume(...arr) {
    let sum = 0
    arr.forEach(n => {
        sum += n.getVolume()
    })
    return sum
}

console.log(totalVolume(box, box2, box3))