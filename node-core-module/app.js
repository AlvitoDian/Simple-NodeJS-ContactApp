// Core Modul

// File System
const fs = require("fs");

// Menulis string terhadap file (synchronous)
/* try {
  fs.writeFileSync("test.txt", "Halo Gan asdf Synchronous");
} catch (e) {
  console.log(e);
} */

// Menulis string terhadap file (asynchronous)
/* fs.writeFile("test2.txt", "Halo 2 gan", (err) => {
  console.log(err);
}); */

// Membaca isi file synchronous
/* const data = fs.readFileSync("test.txt", "utf-8");
console.log(data); */

// Membaca isi file synchronous
/* fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
 */

// Readline
const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan Nama Anda : ", (nama) => {
  rl.question("Masukkan No HP : ", (noHP) => {
    const contact = { nama, noHP };
    const fileBuffer = fs.readFileSync("contacts.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);
    fs.writeFileSync("contacts.json", JSON.stringify(contacts));

    console.log("Terima Kasih sudah memasukkan data");

    rl.close();
  });
});
