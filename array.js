const array = [];
const value = ['Zikri', 'adek', 'tholol'];

// menampilkan array
console.log("Menampilkan Array");
console.table(value);

// menambahkan array
console.log("Menambahkan Array");
value.push('hebat');
value.push(['berbahaya', 'percaya_diri', 'pantang_menyerag']);
console.table(value);

// melihat panjang array
console.log("Melihat Array");
console.log(value.length);

// menghapus array
console.log("Menghapus Array");
delete value[2];
console.table(value);

// mendapatkan data di posisi index 
console.log("Mendapatkan Data Array");
console.log(value[1]);

// mengubah data array 
console.log("Mengubah Data Array");
value[4] = 'Padang';
console.table(value);