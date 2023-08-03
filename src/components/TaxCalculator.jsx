// import React, { useState } from 'react'

const TaxCalculator = ({income, savings}) => {
  // const [ans,setans]=useState(0);
  let taxableIncome = income;
  let res=null;

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
    res=0;
  } else if (taxableIncome <= 500000) {
    res=(0.1 * (taxableIncome - 250000))
  } else if (taxableIncome <= 1000000) {
    res=(0.1 * 250000 + 0.2 * (taxableIncome - 500000))
  } else {
    res=(0.1 * 250000 + 0.2 * 500000 + 0.3 * (taxableIncome - 1000000))
  }

  return(
    <div>
      <h1 test-dataId="tax-calc">{res}</h1>
    </div>
  )
}

export default TaxCalculator
