//1. fibonacci
function fibonacci(n){
    let first =0;
    let second = 1;
    let next = first + second;
    console.log(first);

    for (let i = 0; i < n; i++) {
        console.log(next);
        next = first + second;
        first = second;
        second = next;
    }

}

//call fibonacci 
fibonacci(20)


//2. is prime
function isPrime(n){
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (let i = 2; i < n; i++) {
       if (n % i ===0){
        return false;
       }         
    }
    return true;//semua number berpotensi bil prima.
}

//console.log("5 isPrime : ",isPrime(5));

for (let i = 0; i < 100; i++) {
    if (isPrime(i)){
       // console.log(i)
    }
}

//3. reverse number : self-number, addOnePlus, palindrome
function reverseNumber(n){
    let reversed = 0;
    while (n > 0) {
        let digit = n % 10;
        reversed =(reversed * 10)+digit;
        n = Math.floor(n/10);
    }
    return reversed;
}

console.log(reverseNumber(214))

//console.log(reverseNumber(2145))