import React from 'react';

interface InputInterface {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  onChange: any;
}

const Input1 = ({label,type,id,placeholder,onChange}:InputInterface):JSX.Element => {


  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={ onChange}
      />
    </div>
  )
}

export default Input1;