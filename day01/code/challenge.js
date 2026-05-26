// // CHALLENGE LOGIC DAY 1
let n = 5;

// challenge 01
for (let i = 0; i < n; i++) {
    let baris = '';
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            baris += '* ';
        } else {
            baris += '  ';
        }
    }
    console.log(baris);
}


// // challenge 02
// for (let i = 0; i < n; i++) {
//     let baris = '';
//     for (let j = 0; j < n; j++) {
//         if (j <= i) {
//             baris += '* ';
//         } else {
//             baris += '  ';
//         }
//     }
//     console.log(baris);
// }

// // challenge 03
// for (let i = 0; i < n; i++) {
//     let baris = '';
//     for (let j = 0; j < n; j++) {
//         if (i + j <= n - 1) {
//             baris += '* ';
//         } else {
//             baris += '  ';
//         }
//     }
//     console.log(baris);
// }

// // challenge 04
// for (let i = 0; i < n; i++) {
//     let baris = '';
//     for (let j = 0; j < n; j++) {
//         if (i + j >= n - 1) {
//             baris += '* ';
//         } else {
//             baris += '  ';
//         }
//     }
//     console.log(baris);
// }

// // challenge 05
// for (let i = 0; i < n; i++) {
//     let baris = '';
//     for (let j = 0; j < n; j++) {
//         if (i === j) {
//             baris += (i + 1) + ' ';
//         } else {
//             baris += '* ';
//         }
//     }
//     console.log(baris);
// }

// // challenge 06
// for (let i = 0; i < n; i++) {
//     let baris = '';
//     for (let j = 0; j < n; j++) {
//         if (j === 0) {
//             baris += (i + 1) + ' ';
//         } else if (i === n - 1) {
//             baris += (n + j) + ' ';
//         } else {
//             baris += '* ';
//         }
//     }
//     console.log(baris);
// }

// // challenge 07
// for (let i = 0; i < n; i++) {
//     let baris = '';
//     for (let j = 0; j < n; j++) {
//         if (j >= i) {
//             baris += '* ';
//         } else {
//             baris += '  ';
//         }
//     }
//     console.log(baris);
// }