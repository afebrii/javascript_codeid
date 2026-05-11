const n = 8;

// for (let i = 0; i < n; i++) {
//     console.log("*");
// }

let baris = '';
for (let i = 0; i < n; i++) {
    baris = '* ';
    for (let j = 0; j < n; j++) {
        baris += '* ';
    }
    console.log(baris);
}

