import React, { useRef } from 'react';

const FormUncontrolledInput = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("name: " + inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter name" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default FormUncontrolledInput;
