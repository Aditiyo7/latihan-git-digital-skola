function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(3));


function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(3));


function segitigaSamaKaki(tinggi) {
    for (let i = 0; i < tinggi; i++) {
        let baris = '';
        for (let j = 0; j < tinggi - i - 1; j++) {
            baris += ' ';
        }
        for (let k = 0; k <= i; k++) {
            baris += '* ';
        }
        console.log(baris);
    }
}

segitigaSamaKaki(3);