# -LT-12_Array

Array adalah tipe data yang digunakan untuk menyimpan dan mengelola sekumpulan nilai atau objek. Setiap elemen dalam array dapat diakses menggunakan indeks, yang merupakan posisi elemen tersebut dalam array. Indeks dimulai dari 0, sehingga elemen pertama dalam array memiliki indeks 0, elemen kedua memiliki indeks 1, dan seterusnya. Contoh:

    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers[0]); // output: 1
    console.log(numbers[1]); // output: 2
    console.log(numbers[2]); // output: 3

Array dapat berisi elemen dengan tipe data apa saja, baik itu tipe data primitif (seperti number, string, dan boolean) maupun tipe data objek (seperti object dan array itu sendiri). Contoh:

    let values = [1, "hello", true, [1, 2, 3], { name: "John" }];
    console.log(values[0]); // output: 1
    console.log(values[1]); // output: "hello"
    console.log(values[2]); // output: true
    console.log(values[3]); // output: [1, 2, 3]
    console.log(values[4]); // output: { name: "John" }

Anda dapat menggunakan banyak method yang tersedia di JavaScript untuk mengelola dan memanipulasi array. Beberapa method yang sering digunakan adalah:

* length: Menampilkan jumlah elemen dalam array.
* push(): Menambah elemen baru di akhir array.
* pop(): Menghapus elemen terakhir dari array.
* shift(): Menghapus elemen pertama dari array.
* unshift(): Menambah elemen baru di awal array.
* slice(): Memotong sebagian dari array dan mengembalikan sebagai array baru.
* splice(): Menghapus elemen dari array atau menambah elemen baru ke dalam array.
* sort(): Mengurutkan elemen dalam array.
* reverse(): Membalikkan urutan elemen dalam array.

Contoh:

    let numbers = [1, 2, 3, 4, 5];

    console.log(numbers.length); // output: 5

    numbers.push(6);
    console.log(numbers); // output: [1, 2, 3, 4, 5, 6]

    numbers.pop();
    console.log(numbers); // output: [1, 2, 3, 4, 5]

    numbers.shift();
    console.log(numbers); // output: [2, 3, 4, 5]

    numbers.unshift(1);
    console.log(numbers); // output: [1,2,3,4,5]

    numbers.slice(1, 3)); 
    console.log(numbers); // output: [1,2,3,4,5]

    numbers.splice(1, 2, 6, 7);
    console.log(numbers); // output: [1, 6, 7, 5]

    numbers.sort();
    console.log(numbers); // output: [1, 5, 6, 7]

    numbers.reverse();
    console.log(numbers); // output: [7, 6, 5, 1]


Selain method di atas, array juga memiliki beberapa property yang bisa digunakan untuk mengelola elemennya, seperti:

- indexOf(): Mencari indeks dari elemen yang ditentukan.
- lastIndexOf(): Mencari indeks terakhir dari elemen yang ditentukan.
- includes(): Mengecek apakah array mengandung elemen yang ditentukan.

Contoh:

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(numbers.indexOf(5)); // output: 4
    console.log(numbers.lastIndexOf(5)); // output: 4
    console.log(numbers.includes(5)); // output: true
    console.log(numbers.includes(11)); // output: false
