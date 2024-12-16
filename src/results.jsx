import IsItOverHenry from "./pages/isitoverhenry"
import { Link } from "react-router-dom"

return (
    <>
    <div>
        <button><Link to={"/challenger"}>back to home</Link></button>
    </div>
    <div>
    <IsItOverHenry/>
    </div>
    </>
)