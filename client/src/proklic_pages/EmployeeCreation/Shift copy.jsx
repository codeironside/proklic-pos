import React from 'react'
import { useState } from 'react';
import { condimentSetData } from '../../data/makeData';

const Shift = () => {
  const [firstDropdown, setFirstDropdown] = useState('');
  const [secondDropdown, setSecondDropdown] = useState('');

  const handleFirstDropdownChange = (event) => {
    setFirstDropdown(event.target.value);
    // Here you can update the options for the second dropdown based on the selected value of the first dropdown
  };

  const handleSecondDropdownChange = (event) => {
    setSecondDropdown(event.target.value);
  };

  const handleChange = () => {
    const combinedValues = {firstDropdown, secondDropdown};
    console.log(combinedValues)
  }

  return (
    <div>
      <select value={firstDropdown} onChange={handleFirstDropdownChange}>
        <option value="">Select an option</option>
        
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      <select value={secondDropdown} onChange={handleSecondDropdownChange}>
        <option value="">Select an option</option>
        {firstDropdown === 'option1' && (
          <>
            <option value="subOption1">Sub-option 1</option>
            <option value="subOption2">Sub-option 2</option>
          </>
        )}
        {firstDropdown === 'option2' && (
          <>
            <option value="subOption3">Sub-option 3</option>
            <option value="subOption4">Sub-option 4</option>
          </>
        )}
      </select>

      <button onClick={handleChange}>Submit</button>
    </div>
  );
}

export default Shift
