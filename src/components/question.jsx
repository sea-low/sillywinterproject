function Question ({ qbody, qnum}) {
  return (
    <div>
      <h1>Question {qnum}</h1>
      <div>{qbody}</div>
      
      {/* <button type="button" onClick={onClick}>agree</button>
      <button type="button" onClick={onClick}>neutral</button>
      <button type="button" onClick={onClick}>disagree</button> */}
    </div>
  )
}
export default Question;