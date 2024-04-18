

let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,

    addExpense: function(type, amount) {
        this[type] += amount
    },

    removeExpense: function(type, amount) {
        this[type] -= amount
    },

    printMonthlyReport: function() {
        for (let key in this) {
            if (typeof this[key] === 'number') {
                console.log(`${key} uchun oylik xarajat ${this[key] * 30}`);
            }
        }
    }

};

Expenses.addExpense('water', 100)
Expenses.addExpense('water', 100)
Expenses.addExpense('gas', 1000)
Expenses.addExpense('gas', 10)
Expenses.addExpense('electricity', 90)
Expenses.addExpense('electricity', 110)


Expenses.printMonthlyReport()