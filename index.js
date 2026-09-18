function addition(a, b) {
  return a + b;
}
function soustraction(a, b) {
  return a - b;
}
module.exports = { addition, soustraction };

if (require.main === module) {
  console.log("Résultat :", addition(2, 3));
}