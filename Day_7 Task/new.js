let current=new Date("2024-08-08");
let day=current.getDate();
console.log(current);
console.log(current.toString())
console.log(day);

class sample {
    constructor(personname) {
        this.personname= personname;
        console.log(personname);
    }
}
    let result = new sample("Js")

class Bank {
    constructor(intialamont=0) {
        this._balance = intialamont;
    }
    get balance() {
        return this._balance;
    }
        set balance(amount){
        if (amount > 0) {
            this._balance += amount;
            console.log(amount);
                };
    }
}

let b=new Bank(10);
console.log(b._balance);
    
b.balance = 100;
console.log(b._balance);
