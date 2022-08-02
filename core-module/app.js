// Core Module==================

// File System

const fs = require("fs");

// menuliskan string ke file secara synchronous
// try {
//   fs.writeFileSync("data/test.txt", "Menuliskan file secara synchronous");
// } catch (err) {
//   console.log(err);
// }

// menuliskan string ke file secara asnychronous

// fs.writeFile("data/test.txt", "Menulis file secara asynchronous", (e) => {
//   console.log(e);
// });

// membaca isi file (synchronous)

// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca isi file secara asynchronous

// fs.readFile("data/test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("Selanjutnya silahkan masukkan umur anda : ", (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync("data/contact.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFile("data/contact.json", JSON.stringify(contacts), (err) => {
      if (err) throw err;
      console.log(contacts);
    });

    rl.close();
  });
});
