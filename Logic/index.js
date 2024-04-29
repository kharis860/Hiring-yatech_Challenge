console.log("Nilai Mahasiswa Universitas");
console.log("===================================");

let datas = [
  89, 82, 79, 55, 47, 47, 45, 52, 49, 43, 49, 55, 49, 50, 55, 47, 50, 44, 50, 49, 45, 47, 52, 50, 55, 46, 52, 44, 53, 54, 51, 47, 48, 55, 46, 47, 51, 48, 42, 51, 66, 70, 69, 62, 69, 64, 68, 66, 68, 67, 60, 67, 69, 57, 58, 61, 66, 67, 64,
  61, 67, 60, 66, 70, 68, 70, 60, 57, 69, 69, 38, 32, 4, 13, 39, 2, 11, 18, 35, 28, 26, 18, 3, 24, 23, 20, 32, 6, 22, 32, 34, 31, 26, 5, 20, 30, 10, 16, 10, 38, 30, 23, 26, 34, 38, 28, 23, 16, 7, 9, 33, 26, 36, 17, 24, 11, 14, 30, 35, 20,
  5, 1, 2, 17, 23, 36, 26, 1, 29, 3, 39, 23, 17, 11, 4, 25, 8, 26, 18, 39, 3, 11, 35, 38, 21, 34, 19, 5, 29, 20, 12, 64, 68, 69, 54, 48, 55, 47, 53, 44, 47, 46, 54, 55, 49, 85, 75, 83, 74, 94, 92, 96, 96, 97, 96, 94, 91, 96, 90, 78, 75, 29,
  9, 15, 33, 5, 14, 74, 74, 74, 84, 77, 71, 85, 23, 18, 36, 1, 85, 71, 74, 75, 71, 78, 80, 33, 7, 23, 12, 29, 6, 13, 16, 35, 82, 84, 51, 55, 47, 55, 52, 51, 46, 53, 51, 55, 52, 44, 47, 43, 53, 45, 52, 53, 53, 55, 50, 49, 51, 55, 50, 48, 45,
  50, 49, 54, 47, 52, 52, 99,
];

let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;

console.log("Jumlah Mahasiswa: " + datas.length);

function scoreCheck(nilaiMahasiswa) {
  if (nilaiMahasiswa >= 0 && nilaiMahasiswa <= 40) {
    return E++;
  } else if (nilaiMahasiswa >= 41 && nilaiMahasiswa <= 55) {
    return D++;
  } else if (nilaiMahasiswa >= 56 && nilaiMahasiswa <= 70) {
    return C++;
  } else if (nilaiMahasiswa >= 71 && nilaiMahasiswa <= 85) {
    return B++;
  } else if (nilaiMahasiswa >= 86 && nilaiMahasiswa <= 100) {
    return A++;
  } else {
    return "nilai tidak teridentifikasi";
  }
}

datas.forEach((data) => {
  scoreCheck(data);
});
console.log("===================================");
console.log("Distribusi Nilai:");
console.log("A: " + A);
console.log("B: " + B);
console.log("C: " + C);
console.log("D: " + D);
console.log("E: " + E);
