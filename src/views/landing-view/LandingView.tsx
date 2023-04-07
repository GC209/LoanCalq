import React, { useState, useEffect, useContext } from 'react';

import { EmiDetailContext } from '../../hooks/emiProvider';

import { getEMI, calculateIPMTandPPMT } from './EmiCalculations';

import Input1 from '../../components/Input1/Input1';
import Button1 from '../../components/Button1/Button1';

const LandingView = (): JSX.Element => {
  const { emiDetail,setEmiDetail } = useContext(EmiDetailContext);
  const [loanInputs, setLoanInputs] = useState({});
  
  useEffect(() => {
    console.log("Provider");
    console.log(emiDetail);
  }, [emiDetail])
  
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setLoanInputs({...loanInputs, [e.currentTarget.id]: e.currentTarget.value })
  }
  
  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    const { principalAmount, interestRate, loanDuration }:any = loanInputs;
    const perMonthEmi = getEMI(interestRate, loanDuration, principalAmount);
    const installmentArr = [];
    let currPrincipal = principalAmount;
    for (let i = 0; i < loanDuration * 12; i++){
      const principalAndInterest = calculateIPMTandPPMT(principalAmount, perMonthEmi, interestRate, i);
      currPrincipal = currPrincipal-principalAndInterest[0];
      const installmentBreakup = {
        outstandingPrincipal:parseInt(currPrincipal),
        principal: principalAndInterest[0],
        interest: principalAndInterest[1]
      }
      installmentArr.push(installmentBreakup);
    }
    
    let loanEmiDetails = {
      principal: parseInt(principalAmount),
      interest: parseInt(interestRate),
      duration: parseInt(loanDuration),
      emi: perMonthEmi,
      monthlyEmiBreakup:installmentArr
    }

    setEmiDetail(loanEmiDetails)
    //console.log(loanEmiDetails);
  }
  return (
    <div>
      <h1>Enter details</h1>
      <form onSubmit={handleSubmit}>
        <Input1 label="Loan Amount" type="number" id="principalAmount" placeholder='Enter amount' onChange={handleInputChange}></Input1>
        <Input1 label="Interest Rate" type="number" id="interestRate" placeholder='Enter Interest Rate' onChange={handleInputChange}></Input1>
        <Input1 label="Duration" type="number" id="loanDuration" placeholder='Enter Years' onChange={handleInputChange}></Input1>
        <Button1 type="submit" btnText="Submit" btnClass="btn-primary" />        
      </form>
    </div>
  )
}

export default LandingView;