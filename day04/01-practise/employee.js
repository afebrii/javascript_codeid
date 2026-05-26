
// class : blueprint untuk membuat object
class Employee{

    //insert into employee value(empId,fullName,hireDate,salary)
    constructor(empId,fullName,hireDate,salary){
        this.empId = empId;
        this.fullName = fullName;
        this.hireDate = hireDate;
        this.salary = salary;
    }
}

//---------------- create obect -----------
// 1 object = 1 record
const emp1 = new Employee(101,"KangDian",new Date(2022,2,12),5_000_000);
const emp2 = new Employee(102,"Widi",new Date(2023,2,12),3_000_000);


// table employees
const empList = [emp1,emp2]

empList.forEach(emp => {
    console.log(`${emp.empId} ${emp.fullName}`)
});


