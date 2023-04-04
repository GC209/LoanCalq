import React from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;
interface SubmitButton {
  type: ButtonTypes;
  btnText: string;
  btnClass: string;
}
const Button1 = ({ type, btnText, btnClass }: SubmitButton): JSX.Element => {
  return (
    <>
      <button type={type} className={`btn ${btnClass}`}>{btnText}</button>
    </>  
  )
}

export default Button1;