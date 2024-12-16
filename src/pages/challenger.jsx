// import { useState } from "react";
import { Link } from "react-router-dom"
const Challenger = ({onSubmit, formData, onChange, location, onClick}) => {

  return (
    <div>
    <h1>STINKY CHECK</h1>
    <form onSubmit={onSubmit}>
    <div>
    My name is: <input name="name" value={formData.name} onChange={onChange}/>
    </div>
    <div>
      <button type="button" onClick={onClick}>
      <Link type="submit" to={location} >this is correct</Link>
      </button>
    </div>
  </form>
  </div>
  )
}
export default Challenger