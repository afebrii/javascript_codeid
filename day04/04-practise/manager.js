import Employee from "./employee.js";

export default class Manager extends Employee{
    
    constructor(empId,fullName,hireDate,salary,allowance){
        //super : ini bisa akses constructor yg dimilikii oleh Employee (Parent Class)
        super(empId, fullName, hireDate, salary,"Manager");
        this.allowance = allowance
        this.managedTeams =[];
    }   

    addTeamMember(employee){
        this.managedTeams.push(employee);
    }

    displayTeam(){
        this.managedTeams.forEach(emp => {
            console.log(emp.toString())
        });
    }

    //overridie
    calculateTotalSalary(){
        return this.salary + this.allowance
    }

    //override
    toString(){
        return `
        ${super.toString()}
        Allowances : ${this.getFormattedSalary(this.allowance)}
        TotalSalary : ${this.getFormattedSalary(this.calculateTotalSalary())}

        `
    }
}