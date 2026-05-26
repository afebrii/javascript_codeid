//1. initial array old school
let nums = []
nums[0] = 1;
nums[1] = 2;
nums[2] = 10;
nums[3] = 4;

console.table([nums])

nums.unshift(55)

console.table([nums])

//2. using constructor
let brands= new Array("Honda","Suzuki","Yamaha")
console.table([brands])

//3. literal
let emps = ["john","sarsa","arya"]
console.log(emps)

console.table([emps])

//1. unshift : insert first index
let movies = ["got","hobbit","lotr"]
movies.unshift("rambo")

console.log(movies) // output :  ["rambo","got","hobbit","lotr"]

//1.1 insert multiple element array di index pertama
movies = ["got","hobbit","lotr"]
movies.unshift("rambo","mi2","war machine")
console.log(movies) // output :  ["rambo","mi2","war machine","got","hobbit","lotr"]

movies = ["got","hobbit","lotr"]
movies.shift()


//3. insert new element at last index
movies = ["got","hobbit","lotr"]
movies.push("harry potter")

console.log(movies) // output :  ["got","hobbit","lotr","harry potter"]

// insert multiple element array di last index
movies = ["got","hobbit","lotr"]
movies.push("harry potter","MI2")

console.log(movies) // output :  ["got","hobbit","lotr","harry potter","MI2"]

const myMovies = [];

myMovies.push("GOT")
myMovies.push("War")
myMovies = ["Kill The Bill"]

//myMovies= [...myMovies,"War","Demon Slayer"]

console.log(myMovies)

const myNums = [2,8,10,9,12,87]
myNums.sort((a,b)=> a-b);
console.log(myNums)
myNums.sort((a,b)=> b-a);

console.log(myNums)

