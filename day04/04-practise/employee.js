// case encapsulation : teknik menyembunyikan properti agar tidak diakses langsung
// class : blueprint untuk membuat object
export default class Employee {
    #salary; //# : set private

    //insert into employee value(empId,fullName,hireDate,salary)
    constructor(empId, fullName, hireDate, salary,role) {
        this.empId = empId;  //public
        this.fullName = fullName;
        this.hireDate = hireDate;
        this.#salary = salary;
        this.role = role;
    }

    get salary(){
        return this.#salary;
    }

    // method get;set
    set salary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary tidak boleh negative!")
        }

        if (newSalary > 1_000_000_000) {
            throw new Error("Salary tida boleh > 1_000_000_000")
        }
        return newSalary;
    }

    getMasaKerja() {
        if (!this.hireDate || isNaN(this.hireDate.getTime())) {
            console.error('hireDate tidak valid:', this.hireDate);
            return "0 tahun, 0 bulan, 0 hari";
        }

        const today = new Date();
        let years = today.getFullYear() - this.hireDate.getFullYear();
        let months = today.getMonth() - this.hireDate.getMonth();
        let days = today.getDate() - this.hireDate.getDate();

        // Perbaiki nilai negatif untuk days
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
            months--;
        }

        // Perbaiki nilai negatif untuk months
        if (months < 0) {
            months += 12;
            years--;
        }

        // Hitung sisa waktu dalam jam (opsional)
        const hoursDiff = today.getHours() - this.hireDate.getHours();

        return `${years} tahun, ${months} bulan, ${days} hari, ${hoursDiff} jam`;

    }


    getFormattedSalary(baseSalary) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(baseSalary);
    }

    getShortHireDate() {
        return this.hireDate.toLocaleDateString('id-ID', {
            day: '2-digit',   // Output selalu 2 digit, misal: 01, 02
            month: '2-digit', // Misal: 01, 02, 12
            year: 'numeric'   // 2022
        });
    }

    calculateTotalSalary(){
        return this.#salary;//base salary
    }

    toString(){
        return `
        EmpId : ${this.empId}
        FullName : ${this.fullName}
        HireDate : ${this.getShortHireDate(this.hireDate)}
        MasaKerja : ${this.getMasaKerja()}
        Role : ${this.role}
        Salary : ${this.getFormattedSalary(this.salary)}
        `
    }


}



