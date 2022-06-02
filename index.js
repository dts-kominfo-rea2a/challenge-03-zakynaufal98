// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

let panjangArray = dataBelanjaan.length;

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = () => {
  const hasil = [];
  for (let i = 0; i < panjangArray; i++) {
    const listHasil =
      dataBelanjaan[i].nama + " " + "x" + " " + dataBelanjaan[i].kuantitas;
    hasil.push(listHasil);
  }
  return hasil;
};
// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = () => {
  let totalBayar = 0;
  for (let hargaBelanja = 0; hargaBelanja < panjangArray; hargaBelanja++) {
    totalBayar +=
      dataBelanjaan[hargaBelanja].harga * dataBelanjaan[hargaBelanja].kuantitas;
  }
  return totalBayar;
};
// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
