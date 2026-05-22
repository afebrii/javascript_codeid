// 1. FindMinMax
const inputData = [2, 3, 4, 5, 6, 7, 8, 9, 1, 10];

function findMinMaxModern(arr) {
    if (arr.length === 0) return [];
        const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return [min, max];
}

console.log("Input:", inputData);
console.log("Result:", findMinMaxModern(inputData)); 


// 2. FindMinumRange
const inputData = [5, 3, 4, 2, 6, 7, 8, 9, 1, 10];

function findMinRange(arr, from, to) {
    const subArray = arr.slice(from, to);
    const minVal = Math.min(...subArray);
    const minIndex = arr.indexOf(minVal, from);
    
    return [minVal, minIndex];
}

console.log("Result 1:", findMinRange(inputData, 0, 10)); 
console.log("Result 2:", findMinRange(inputData, 0, 7));  

// 3. ReverseList
const inputData = [1, 2, 3, 4];

function reverseListModern(arr) {
    return [...arr].reverse();
}

console.log("Input:", inputData);
console.log("Result:", reverseListModern(inputData)); 

// // 4. FrequestElement
const inputData1 = [1, 2, 3, 4, 4, 4, 3, 3, 2, 4];
const inputData2 = [1, 1, 1, 2, 2, 3, 3, 3];

function frequentElementModern(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

console.log("Result 1:", frequentElementModern(inputData1)); 
console.log("Result 2:", frequentElementModern(inputData2)); 

// 5. Addition
const list1A = [1, 2, 3];
const list2A = [4, 5, 6];
const list1B = [9, 2, 7];
const list2B = [1, 3, 5];

function addition(list1, list2) {
    const num1 = BigInt(list1.join(''));
    const num2 = BigInt(list2.join(''));
    const total = num1 + num2;
    
    return String(total).split('').map(Number);
}

console.log("Result 1:", addition(list1A, list2A)); 
console.log("Result 2:", addition(list1B, list2B)); 

// 6. MergeList
const list1A = [1, 4, 7, 12, 20];
const list2A = [10, 15, 17, 33];
const list1B = [2, 3, 5, 7];
const list2B = [11, 13, 17];
const list1C = [1, 2, 3];
const list2C = [3, 4, 5];

function mergeList(list1, list2) {
    return [...new Set([...list1, ...list2])].sort((a, b) => a - b);
}

console.log("Result 1:", mergeList(list1A, list2A)); 
console.log("Result 2:", mergeList(list1B, list2B)); 