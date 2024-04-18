
function time(...birth){

    let curretTime = new Date()
    console.log(curretTime, '\n')
    console.log(curretTime.toDateString())

    let birthday = new Date(birth)
    console.log(birthday)
    console.log(birthday.toDateString())

    let hoziroy = curretTime.getMonth()
    let tugiloy = birthday.getMonth()

    let oy = (11-hoziroy) + (tugiloy)
    console.log(oy)

    let hozirkun = curretTime.getDate()
    let tugilkun = birthday.getDate()

    let kun = (31 - hozirkun) + tugilkun
    console.log(kun)


    let year = curretTime.getFullYear()

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(366);
    } else {
        console.log(365);
    }


}

let birth = '2003-05-18'
time(birth)
// time(2003, 4, 4)
