import Employee from "./employee.js";
//---------------- create obect -----------
// 1 object = 1 record

try {
    const emp1 = new Employee(101, "KangDian", new Date(2022, 2, 12), 5_000_000);
    const emp2 = new Employee(102, "Widi", new Date(2023, 2, 12), 3_000_000);

    // kita udah gunakan encapsulation
    emp1.salary = 10000000
    emp2.salary = 100_000_000


    // table employees
    const empList = [emp1, emp2]

    empList.forEach(emp => {
       console.log(emp.toString())
    });

} catch (error) {
    console.log(`Error : ${error.message}`)
}