const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullname: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);

const heroPerson ={
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const heroPerson ={
    firstName: 'Hero',
    lastName: 'Kalam',
    salary: 25000
}
// normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3999);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);

// normalPerson.chargeBill.call(friendlyPerson, 500, 200, 40);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson,[4000, 400, 40]);
console.log(heroPerson.salary);