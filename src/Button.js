import React from 'react';
import './Button.css';

function Button(props){

  const {name} = props;
  const {efeito} = props;

  return(
    <button className="button" onChange={efeito}>{name}</button>
  )
}

export default Button;