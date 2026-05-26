//1. SPREAD OPERATORO [...], syntax sugar(shortcut)
// default immutable : ga ubah data asli

//1. copy array
const original = ["Docker","Go"];
let copyOri =[...original] // initial array pertama
copyOri.unshift("Java")

copyOri = ["Java","Js",...copyOri] //re-assignment jadi error

console.log(copyOri)
console.log(original)


// join array
const backend = ["Docker", "Go"];
const frontend = ["JS","Flutter","ReactJS"]; 
const fullStack = [...backend,...frontend]
console.log(fullStack)