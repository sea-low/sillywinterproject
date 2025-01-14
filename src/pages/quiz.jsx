import Question from "../components/question"
import PictureQuestion from "../components/picturequestion"
import RadioButtons from "../components/radiobuttons"
import { Link } from "react-router-dom"

function Quiz({show, pic, q, start, onClick, btntext, location, onChange}) {

    return (
        <>
        {show ? <PictureQuestion pic={pic} qnum={start}/> : <Question qbody={q} qnum={start + 1} onChange={onChange}/>}
        {/* <Question qbody={q} qnum={start + 1} onChange={onChange}/> */}
        <RadioButtons onClick={onClick} btntext={btntext} location={location}/>
        <button type="button" onClick={onClick}><Link to={location}>{btntext}</Link></button>
        </>
    )
}
export default Quiz
