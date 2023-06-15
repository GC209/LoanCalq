function calculateLoanEMI(principal:number, tenure:number, interestRate:number) {
  // Convert interest rate from annual to monthly
  var monthlyInterestRate = interestRate / 12 / 100;

  // Calculate the monthly interest rate
  var emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure);
  emi /= Math.pow(1 + monthlyInterestRate, tenure) - 1;

  return emi;
}

function calculateLoanEMIDetails(principal:number, tenure:number, interestRate:number) {
  var emi = calculateLoanEMI(principal, tenure, interestRate);
  var emiDetails = [];
  var outstandingBalance = principal;

  for (var month = 1; month <= tenure; month++) {
    // Calculate the interest component for the current month
    var interest = outstandingBalance * interestRate / 12 / 100;

    // Calculate the principal component for the current month
    var principalComponent = emi - interest;

    // Calculate the outstanding balance after paying the current month's EMI
    outstandingBalance -= principalComponent;

    emiDetails.push({
      month: month,
      emi: emi.toFixed(2),
      principal: principalComponent.toFixed(2),
      interest: interest.toFixed(2),
      balance: outstandingBalance.toFixed(2)
    });
  }

  return emiDetails;
}

// Example usage
var principal = 300000; // Principal amount
var tenure = 36; // Loan tenure in months
var interestRate = 11.49; // Annual interest rate

var emiBreakdown = calculateLoanEMIDetails(principal, tenure, interestRate);

emiBreakdown.forEach(function (emi) {
  console.log('Month:', emi.month);
  console.log('Monthly EMI:', emi.emi);
  console.log('Principal Paid:', emi.principal);
  console.log('Interest Paid:', emi.interest);
  console.log('Outstanding Balance:', emi.balance);
  console.log('------------------------');
});


export { };