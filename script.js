function cetakNama(nama){
    return `Halo, saya ${nama}`;
}

let test = 123;

const siswa = {
    nama : 'Dedek Jaya',
    umur : 13,

    // cetakMhs = () =>{}
    
    // notasi es6 baru
    cetakSiswa(){
        return `Halo, nama saya ${this.nama}, saya ${this.umur}.`;
    }

}

class Orang{
    constructor(){
        console.log('Object orang telah dibuat');
    }
}

// Versi export =====================

// module.exports.cetakNama = cetakNama;
// module.exports.test = test;
// module.exports.siswa = siswa;
// module.exports.Orang = Orang;

// dijadiin 1 object=========

// module.exports = {
//     cetakNama : cetakNama,
//     test : test,
//     siswa : siswa,
//     Orang : Orang
// }

// jika nama property sama dengan value

module.exports = {cetakNama, test, siswa, Orang};