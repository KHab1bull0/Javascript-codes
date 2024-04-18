
// 1 - usul
function lastday1(year, month) {

    if (month >= 0 && month <= 11) {

        let oy = new Map([
            [1, 31],
            [2, 28],
            [3, 31],
            [4, 30],
            [5, 31],
            [6, 30],
            [7, 31],
            [8, 31],
            [9, 30],
            [10, 31],
            [11, 30],
            [12, 31]
        ]);

        let n = oy.get(month+1)

        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            if (n === 28) {
                return n + 1
            } else {
                return n
            }
        } else {
            return n
        }
    }
}

console.log(lastday1(2014, 0))


// 2 - usul
function lastday(year, month) {
    let lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    return lastDayOfMonth;
}

console.log(lastday(2014, 0));


