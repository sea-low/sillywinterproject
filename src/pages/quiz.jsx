import Question from "../components/question"
import RadioButtons from "../components/radiobuttons"
import { Link } from "react-router-dom"

function Quiz({q, start, onClick, btntext, location, onChange}) {
    console.log("hi")
    return (
        <>
        <Question qbody={q} qnum={start + 1} onChange={onChange}/>
        <RadioButtons onClick={onClick} btntext={btntext} location={location}/>
        <button type="button" onClick={onClick}><Link to={location}>{btntext}</Link></button>
        </>
    )
}
export default Quiz
