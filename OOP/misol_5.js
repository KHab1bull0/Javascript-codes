

class Circle{
    constructor(radius){
        this.radius = radius
    }

    getArea(){
        console.log(Math.PI * (this.radius**2))
    }

    getParametr(){
        console.log(2 * Math.PI * this.radius)
    }

}

let aylana1 = new Circle(5)
let aylana2 = new Circle(6)
let aylana3 = new Circle(3)

aylana1.getArea()
aylana1.getParametr()

aylana2.getArea()
aylana2.getParametr()

aylana3.getArea()
aylana3.getParametr()


