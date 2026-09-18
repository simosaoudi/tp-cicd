function addition(a, b) {
  return a + b;
}

module.exports = { addition };

if (require.main === module) {
  console.log("Résultat :", addition(2, 3));
}