import { useState } from "react";
import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Challenger from './pages/challenger.jsx'
import Quiz from './pages/quiz.jsx';
import IsItOverHenry from './pages/stinky.jsx';
// import { useNavigate } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState ({name: ""});

    // let navigate = useNavigate()
    
    // const routeChange = (path) =>{ 
    //   navigate(path);
    // }
  const formDataHandler = (event) => {
    const { name, value } = event.target;
    setFormData( {...formData, [name]: value})
  }
  const addNew = (event) => {
    event.preventDefault()

    const newlyAdded = {
      name: formData.name,
    }
  }
  function handleClick() {
    console.log(formData.name)
  }

  // work on quiz portion
  // attempt to put the functions for quiz portion into this page
  // see if you can navigate with the buttons on challenger and on quiz page
  // don't cry lol


  return (
    <Router>
      <Routes>
        <Route exact path="/challenger" element={<Challenger onSubmit={handleClick()} onChange={formDataHandler} formData={formData} onClick={addNew}/>}/>
        <Route exact path="/quiz" element={<Quiz/>}/>
        <Route exact path="/stinky" element={<IsItOverHenry/>}/>
      </Routes>
    </Router>
  )
}

export default App
