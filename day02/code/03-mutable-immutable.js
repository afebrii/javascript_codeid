//1. mutable : data origin ikut berubah
let stack = ["js","es","ts"]
let devStack = stack;

devStack.push("java",".NET")
console.log(devStack)
console.log(stack)

//2.immutable : dimana data asli ga berubah
let skill = ["Go","Java","JS","TS"];
let tagSkill = skill.slice(1);

console.table([skill])
console.table([tagSkill])
tagSkill.push(".net")
console.table([tagSkill])
console.table([skill])