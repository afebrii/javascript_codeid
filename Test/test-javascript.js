function parameter(n, start) {

    let baris = '';
    for (let i = 0; i < n; i++) {
            let num = start + i;
            for (let j = 0; j <= i; j++) {
                baris += num;
                num++
            }
            baris += '\n';
            // console.log(no);
        }
    return baris
}

console.log(parameter(7, 5))

// const n = 5

// let baris = '';
// for (let i = 0; i < n; i++) {
//     baris = '* ';
//     for (let j = 0; j < n; j++) {
//         baris += '* ';
//     }
//     console.log(baris);
// }