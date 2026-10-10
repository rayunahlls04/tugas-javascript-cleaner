// ==========================================
// Case 1: User Data Cleaner
// ==========================================
const rawData = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Bersihkan whitespace & ubah jadi array
const cleanedArray = rawData
  .trim()
  .split(',')
  .map(name => name.trim().toLowerCase());

// 2. Gabungkan kembali dengan format " | "
const resultCase1 = cleanedArray.join(' | ');

console.log("--- Hasil Case 1 ---");
console.log(resultCase1);


// ==========================================
// Case 2: E-Commerce Product Filter
// ==========================================
const products = [
  { name: 'Laptop', price: 1000, active: true },
  { name: 'Mouse', price: 20, active: false },
  { name: 'Keyboard', price: 50, active: true }
];

// 1. Saring produk yang aktif (active: true)
const activeProducts = products.filter(product => product.active);

// 2. Buat array nama produk berhuruf kapital semua
const uppercaseNames = activeProducts.map(product => product.name.toUpperCase());

// 3. Hitung total harga produk yang aktif
const totalPrice = activeProducts.reduce((sum, product) => sum + product.price, 0);

console.log("\n--- Hasil Case 2 ---");
console.log("Produk Aktif:", activeProducts);
console.log("Nama Produk (UPPERCASE):", uppercaseNames);
console.log("Total Harga Produk Aktif:", totalPrice);