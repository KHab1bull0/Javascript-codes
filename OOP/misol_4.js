

class BankAccount{
    constructor(ownername = '', balance = 0, accountnumber = 0 ){
        this.ownername = ownername
        this.balance = balance
        this.accountnumber = accountnumber
    }

    deposit(summa){
        this.balance += summa
        console.log(this.balance, '$')
    }

    withdraw(summa){
        if(this.balance > summa){
            this.balance -= summa
            console.log(this.balance, '$')
        } else {
            console.log('Mablag\' yetarli emas' )
        }
    }

    showbalance(){
        console.log(this.balance)
    }

}


let user1 = new BankAccount('hasan', 0, 12344321)
user1.showbalance()
user1.deposit(120)
user1.deposit(12000)
user1.withdraw(5000)


let user2 = new BankAccount('husan', 0, 23455432)
user1.showbalance()
user1.deposit(1120)
user1.deposit(22000)
user1.withdraw(5000)