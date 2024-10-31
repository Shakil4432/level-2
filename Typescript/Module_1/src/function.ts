// learning function
// normal function
// arrow function

function add(num1:number, num2:number):number{
    return num1+num2
}

add(1, 2)

const  addArrow = (num1:number, num2:number):number => num1+num2

// Object->function->method
const addUser = {
    name:"Shakil",
    balance:0,
    addMyBalance(balance:number):string{
        return(`my total balance is ${this.balance + balance}`)
    }
}

const newArray:number[] = [1, 2, 3, 44, 55];
const arrayMap:number[]= newArray.map((sq:number):number => sq*sq)