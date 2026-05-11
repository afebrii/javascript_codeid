// 1. string
// keyword const, variable const selalu jadikan priority
// hindari penggunaaan var
const words = "hello codeid bootcamp nodejs";
// var kata = "hello kata";

// 2. Number
let salary = 5000;
let salaryDigit = 5_000_000; // digit separator
// re-initial 
salary = 6_000_000;

// console.log(salary);

// 3. boolean
let isPermanent = true;

// 4. null (sengaja dikosongkan)
let department  = null;

// 5.  undefinned, belum ada nilai
let status;

// 6. bigint
const totalRevenue = 12234134134123n;

// 7. symbol (identifie unique)
const id = Symbol("user_id");

// 8. copy by value
let x = 10;
let y = x;
y = 100;

console.log(y);
console.log(x);