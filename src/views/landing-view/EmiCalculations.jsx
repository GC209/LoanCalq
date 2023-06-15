/*
  * ir   - interest rate per month
  * np   - number of periods (months)
  * pv   - present value
  * fv   - future value
  * type - when the payments are due:
  *        0: end of the period, e.g. end of month (default)
  *        1: beginning of period
*/

function calculateRate(annualInterestRate) {
  return annualInterestRate / 1200;
}
//Function to calculate PMT
export const getEMI = (annualInterestRate, timePeriod, pv, fv = 0, type = 0) => {
  const ir = calculateRate(annualInterestRate);
  const np = timePeriod * 12;
  if (ir === 0) return -(pv + fv) / np;
  
  var pvif = Math.pow(1 + ir, np);
  var pmt = ir / (pvif - 1) * (pv * pvif + fv);

  if (type === 1) {
      pmt /= (1 + ir);
  };
  return parseInt(pmt);
}

//Function to calculate IPMT & PPMT
export const calculateIPMTandPPMT = (presentValue, pmt, annualInterestRate, installmentNumber ) => {
  const ir = calculateRate(annualInterestRate);
  var tmp = Math.pow(1 + ir, installmentNumber);
  const ipmt = parseInt(presentValue * tmp * ir - pmt * (tmp - 1));
  const ppmt = pmt - ipmt;
  return [ppmt, ipmt];
}
