// ==  vs ===
//1.equality loose : compare dua nilai dengan tipe data berbeda, 
//jadi js akan mengubah salah satu atau keduanya jadi tipe data yg sama
console.log(5 == "5") //true (string "5" diubah menjadi Number 5)
console.log(1==true) // TRUE 
console.log(null == undefined); //true

//2. strict equality
// bandigngkan value dan tipe data
console.log(5 === "5") //false (string "5" diubah menjadi Number 5)
console.log(1==true) // false
console.log(null == undefined); //false