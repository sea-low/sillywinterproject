const Question = ({ qbody, onChange1, onChange2, onChange3 }) => {
  return (
    <div>
      <div>{qbody}</div>
      <button type="button" onChange={onChange1}>agree</button>
      <button type="button" onChange={onChange2}>neutral</button>
      <button type="button" onChange={onChange3}>disagree</button>
    </div>
  )
}
export default Question;