// 1. OrderEvenBeforeOdd

function orderEvenBeforeOdd(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            let current = arr[j];
            let next = arr[j + 1];
            let currentIsEven = current % 2 === 0;
            let nextIsEven = next % 2 === 0;
            let shouldSwap = false;

            if (!currentIsEven && nextIsEven) {
                shouldSwap = true;
            } 
            else if (currentIsEven && nextIsEven && current > next) {
                shouldSwap = true;
            } 
            else if (!currentIsEven && !nextIsEven && current > next) {
                shouldSwap = true;
            }

            if (shouldSwap) {
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }
    return arr;
}

function displayArray(arr) {
    console.log("[" + arr.join(", ") + "]");
}

let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
orderEvenBeforeOdd(input1);
displayArray(input1); 

let input2 = [3, 4, 5, 2, 10];
orderEvenBeforeOdd(input2);
displayArray(input2); 

let input3 = [2, 4, 6, 10, 1];
orderEvenBeforeOdd(input3);
displayArray(input3); 

// 2. String Palindrome

function isPalindromeArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeArray(["donout", "king", "donout"]));
console.log(isPalindromeArray(["min", "max", "min"]));
console.log(isPalindromeArray(["true", "false", "false"]));

// 3. AddOnePlus

function addOnePlus(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

console.log(addOnePlus([1, 3, 2, 4]));
console.log(addOnePlus([1, 4, 8, 9]));
console.log(addOnePlus([9, 9, 9, 9]));