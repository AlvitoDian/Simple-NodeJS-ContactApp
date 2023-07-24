const yargs = require("yargs");
const contacts = require("./contacts");
// Take Argument from Comand Line

yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor Handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();
/* const contacts = require("./contacts.js");

const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukkan Nama Anda : ");
  const email = await contacts.tulisPertanyaan("Masukkan email anda : ");
  const noHP = await contacts.tulisPertanyaan("Masukkan No HP anda : ");

  contacts.simpanContact(nama, email, noHP);
};

main();
 */
