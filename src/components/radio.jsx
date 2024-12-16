import React, {useState} from "react"

function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState('option1')

  const thisOption = (event) => {
    setSelectedValue(event.target.value)
  }
  return (
    <div>
      <label>
        <input 
          type="radio" 
          value="option1" 
          checked={selectedValue === 'option1'} 
          onChange={thisOption} 
        />
        Agree
      </label>
      <label>
        <input 
          type="radio" 
          value="option2" 
          checked={selectedValue === 'option2'} 
          onChange={thisOption} 
        />
        Neutral
      </label>
      <label>
        <input 
          type="radio" 
          value="option3" 
          checked={selectedValue === 'option3'} 
          onChange={thisOption} 
        />
        Disagree
      </label>
    </div>
  );
}
export default RadioButtons