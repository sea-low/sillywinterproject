import { Link } from "react-router-dom"
function IsItOverHenry ({enteredName, onClick, agt}){
    return (
        <>
        <div>
            <button type="button" onClick={onClick}><Link to={"/challenger"}>back to home</Link></button>
        </div>
        <div>
            <h1>
            {enteredName} {agt}
            </h1>
        </div>
        </>
    )
}
export default IsItOverHenry