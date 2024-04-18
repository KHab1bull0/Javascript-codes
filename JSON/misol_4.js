

function all(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let [price, soni, soliq] = [arr[i].prc, arr[i].qty,arr[i].taxable ]

        if (soliq == true) {
            sum += (price * soni) + ((price / 100) * 6)
        } else {
            sum += price * soni
        }
    }
    return sum
}


let arr = [
    { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
    { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
    { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
]

console.log(all(arr))