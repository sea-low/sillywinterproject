function Question ({ qbody, qnum}) {
  return (
    <div>
      <h1>Question {qnum}</h1>
      <div>{qbody}</div>
    </div>
  )
}
export default Question;