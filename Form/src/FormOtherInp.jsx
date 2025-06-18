import React, { useState } from 'react';

const FormOtherInputComponent = () => {
  const [gender, setGender] = useState('');
  const [hobby, setHobby] = useState(false);
  const [city, setCity] = useState('');

  return (
    <>
      <h4>Gender:</h4>
      <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
      <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female

      <h4>Hobby:</h4>
      <input type="checkbox" onChange={(e) => setHobby(e.target.checked)} /> Reading

      <h4>City:</h4>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">Select</option>
        <option value="Bhopal">Bhopal</option>
        <option value="Delhi">Delhi</option>
      </select>

      <p>{gender} | Hobby: {hobby ? "Yes" : "No"} | City: {city}</p>
    </>
  );
};

export default FormOtherInputComponent;
 