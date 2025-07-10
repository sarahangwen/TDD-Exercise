function calculateTax(income) {
  if (income < 12000) return 0;
  if (income <= 36000) return (income - 12000) * 0.2;
  // return (36000 - 12000) * 0.2 + (income - 36000) * 0.4;
}

module.exports = { calculateTax };
