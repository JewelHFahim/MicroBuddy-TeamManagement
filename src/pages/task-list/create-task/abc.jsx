import React, { useState } from 'react';

function Abc() {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          checked={isChecked}
          onClick={handleRadioClick}
        />
        Toggle Radio
      </label>
      <p>Value: {isChecked.toString()}</p>
    </div>
  );
}

export default Abc;
