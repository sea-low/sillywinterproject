// import { useState } from "react";
const Challenger = ({onSubmit, formData, onChange, onClick}) => {

  return (
    <div>
    <h1>STINKY CHECK</h1>
    <form onSubmit={onSubmit}>
    <div>
    My name is: <input name="name" value={formData.name} onChange={onChange}/>
    </div>
    <div>
      <button type="submit" onClick={onClick}>this is correct</button>
    </div>
  </form>
  </div>
  )
}
export default Challenger