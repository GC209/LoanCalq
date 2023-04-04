import React, {useState, useEffect, useReducer} from 'react';

import Input1 from '../../components/Input1/Input1';
import Button1 from '../../components/Button1/Button1';

const LandingView = (): JSX.Element => {
  
  const [loanInputs, setLoanInputs] = useState({});
  
  useEffect(() => {
    console.log(loanInputs)
  },[loanInputs])
  
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setLoanInputs({...loanInputs, [e.currentTarget.id]: e.currentTarget.value })
  }

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    //console.log(loanInputs);
    
  }
  return (
    <div>
      <h1>Enter details</h1>
      <form onSubmit={handleSubmit}>
        <Input1 label="Loan Amount" type="text" id="principalAmount" placeholder='Enter amount' onChange={handleInputChange}></Input1>
        <Input1 label="Interest Rate" type="text" id="interestRate" placeholder='Enter Interest Rate' onChange={handleInputChange}></Input1>
        <Input1 label="Duration" type="text" id="loanDuration" placeholder='Enter Years' onChange={handleInputChange}></Input1>
        <Button1 type="submit" btnText="Submit" btnClass="btn-primary" />        
      </form>
    </div>
  )
}

export default LandingView;