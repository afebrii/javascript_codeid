// 1.

function generateMatrixPattern() {
    let matrix = [];
    let counter = 1;

    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 5; j++) {
            row.push(counter);
            counter++;
        }
        matrix.push(row);
    }
    return matrix;
}

const resultMatrix = generateMatrixPattern();
console.table(resultMatrix);

// 2. 

function generateTriangleMatrix() {
    let matrix = [];

    for (let i = 0; i < 5; i++) {
        let row = [];

        for (let j = 0; j < 5; j++) {
            if (j <= i) {
                row.push(i + j + 1);
            } else {
                row.push("");
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}
const result = generateTriangleMatrix();
console.table(result);

// 3. 

function generateUpperLeftTriangle() {
    let matrix = [];

    for (let i = 0; i < 5; i++) {
        let row = [];

        for (let j = 0; j < 5; j++) {
            if (i + j <= 4) {
                row.push(i + j + 1);
            } else {
                row.push("");
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}

const result = generateUpperLeftTriangle();
console.table(result);

// 4.

function generateUpperRightTriangle() {
    let matrix = [];

    for (let i = 0; i < 5; i++) {
        let row = [];
        
        for (let j = 0; j < 5; j++) {
            if (j >= i) {
                row.push(j + 1);
            } else {
                row.push("");
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}

const result = generateUpperRightTriangle();
console.table(result);

// 5.

function generateDiagonalMatrix() {
    let matrix = [];

    for (let i = 0; i < 5; i++) {
        let row = [];
        
        for (let j = 0; j < 5; j++) {
            if (i === j) {
                row.push(i + 1);
            } else if (j > i) {
                row.push(10);
            } else {
                row.push(20);
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}

const result = generateDiagonalMatrix();
console.table(result);

// 6.

function generateReversedDiagonalMatrix() {
    let matrix = [];

    for (let i = 0; i < 5; i++) {
        let row = [];
        
        for (let j = 0; j < 5; j++) {
            if (i === j) {
                row.push(5 - i);
            } else if (j > i) {
                row.push(20);
            } else {
                row.push(10);
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}

const result = generateReversedDiagonalMatrix();
console.table(result);

// 7.

function printInvertedPyramid(rows) {
    console.log(`Input jumlah baris piramid : ${rows}`);
    
    for (let i = rows; i >= 1; i--) {
        let rowString = "";
        
        for (let j = i; j >= 1; j--) {
            rowString += j + " ";
        }
        
        for (let j = 2; j <= i; j++) {
            rowString += j + " ";
        }
        
        console.log(rowString.trim());
    }
}

printInvertedPyramid(8);

// 9.

function generateAlternatingMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        
        for (let j = 0; j < n; j++) {
            if (i % 2 === 0) {
                row.push(n - j);
            } else {
                row.push(j + 1);
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}

console.log("\nMatriks untuk n = 9:");
const matrix9 = generateAlternatingMatrix(9);
console.table(matrix9);

console.log("Matriks untuk n = 5:");
const matrix5 = generateAlternatingMatrix(5);
console.table(matrix5);


// 10.

function generateCheckerboardMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 !== 0) {
                row.push(j + 1);
            } else {
                row.push("-");
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}

console.log("\nMatriks untuk n = 9:");
const matrix9 = generateCheckerboardMatrix(9);
console.table(matrix9);

console.log("Matriks untuk n = 5:");
const matrix5 = generateCheckerboardMatrix(5);
console.table(matrix5);

