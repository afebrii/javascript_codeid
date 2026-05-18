// 1. isPalindrome

function isPalindrome(n) {
    let reversed = 0;

    for (let temp = n; temp > 0; temp = Math.floor(temp / 10)) {
        let digit = temp % 10;
        reversed = (reversed * 10) + digit;
    }

    return n === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(2147447412));
console.log(isPalindrome(110));

// 2. Capitalize

function capitalize(input) {
    let capital = "";

    for (let i = 0; i < input.length; i++) {
        if (i === 0 || input[i - 1] === ' ') {
            capital += input[i].toUpperCase();
        } else {
            capital += input[i];
        }
    }

    return capital;
}

console.log(capitalize("this is a very special title"));
console.log(capitalize("effective java is great"));

// 3. IsNoDuplicateChar

function isNoDuplicateChar(s) {
    let seen = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (seen[char]) {
            return false; 
        }
        seen[char] = true;
    }

    return true;
}

console.log(isNoDuplicateChar("codeid"));
console.log(isNoDuplicateChar("abcde"));
console.log(isNoDuplicateChar("jdbc"));

// 4. IsBrace

function isBrace(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
        } else if (s[i] === ')') {
            count--;
        }

        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}

console.log(isBrace("(())"));
console.log(isBrace("()()"));
console.log(isBrace("((()"));