const Question = ({ qbody, qnum, onChange }) => {
  return (
    <div>
      <h1>Question {qnum}</h1>
      <div>{qbody}</div>
      <button type="button" onChange={onChange}>agree</button>
      <button type="button" onChange={onChange}>neutral</button>
      <button type="button" onChange={onChange}>disagree</button>
    </div>
  )
}
export default Question;