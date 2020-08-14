import React, { useState, useEffect } from 'react';

function Square({colorText}) {
 
  console.log('Square', colorText);
  useEffect(() => {
    console.log('Square change', colorText);
  }, [colorText])
  return (
    <div className="square" style={{ background: colorText }}>
      <div>Button</div>
    </div>
  );
}

export default Square;
