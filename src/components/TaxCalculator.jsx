// tax_calculator.jsx
function calculateTax(income, savings) {
  let taxableIncome = income;

  // Apply rebate based on savings
  if (income <= 500000) {
    taxableIncome -= 0.5 * savings;
  } else if (income <= 1000000) {
    taxableIncome -= 0.3 * savings;
  } else {
    taxableIncome -= Math.min(0.1 * savings, 50000);
  }

  // Calculate tax based on taxable income
  if (taxableIncome <= 250000) {
    return 0;
  } else if (taxableIncome <= 500000) {
    return 0.1 * (taxableIncome - 250000);
  } else if (taxableIncome <= 1000000) {
    return 0.1 * 250000 + 0.2 * (taxableIncome - 500000);
  } else {
    return 0.1 * 250000 + 0.2 * 500000 + 0.3 * (taxableIncome - 1000000);
  }
}

export default calculateTax;
