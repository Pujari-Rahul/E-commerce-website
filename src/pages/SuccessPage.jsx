import React from 'react';

const SuccessPage = () => {
  const style={
    color:'green',
    fontSize:'40px',
    textAlign:'center'
  }
  return (
    <div>
      <h1 style={style}>Success!</h1>
      <p style={style}>Your action was successful.</p>
      {/* Add any additional content or components as needed */}
    </div>
  );
};

export default SuccessPage;