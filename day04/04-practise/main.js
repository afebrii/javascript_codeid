import Employee from "./employee.js";
import Manager from "./manager.js";
//---------------- create obect -----------


const emp1 = new Employee(101, "Rini", new Date(2022, 1, 20), 10_000_000, "Developer");
const emp2 = new Employee(102, "Wini", new Date(2023, 1, 20), 9_000_000, "QA");
const emp3 = new Employee(103, "Widi", new Date(2024, 1, 20), 5_000_000, "UI/UX");

const empList = [emp1, emp2, emp3]

const manager = new Manager(100, "John Snow", new Date(2019, 2, 5),15_000_000, 2_000_000);
manager.addTeamMember(empList)


console.log(manager.toString())
manager.displayTeam()