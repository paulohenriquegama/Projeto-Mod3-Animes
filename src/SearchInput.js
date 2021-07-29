import React from 'react';

const SearchInput = ({text, onChange}) => {

  function handleChange(event){
    onChange(event.target.value);
  };

  return (
    <input type="search" value={text} onChange={handleChange}></input>
  );
}

export default SearchInput;