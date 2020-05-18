import React from 'react';

function FormInputError({ message }) {
  return (
    <div className="FormInputError" style={{ color: 'red' }}>
      <p> ⚠ {message}</p>
    </div>
  );
}

export default FormInputError;
