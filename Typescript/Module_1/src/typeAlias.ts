{
    // Type Alias

    type Student = {
        name:string,
        age:number,
        gender:string,
        contactNo:string,
        address:string
    }

    const student1:Student = {
        name:"Shakil Hossain",
        age:40,
        gender:"male",
        contactNo:"0170000998",
        address:"Dhaka",
    }

    const student2:Student= {
        name:"Shakil Hossain",
        age:40,
        gender:"male",
        contactNo:"0170000998",
        address:"Dhaka",
    }


    type Add = (num1:number, num2:number)=> number;
    const add:Add = (num1, num2)=> num1+num2;
}