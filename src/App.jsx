import React, { useState } from "react";
import {
  Link,
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Challenger from './pages/challenger.jsx'
import Quiz from './pages/quiz.jsx';
import Question from "./components/question.jsx";
import IsItOverHenry from './pages/isitoverhenry.jsx';
// import pic1 from "/pics/pic1"
// import pic2 from "/pics/pic2"
// import pic3 from "/pics/pic3"
// import { useNavigate } from "react-router-dom";

function App() {

  // garbage from when I was sorting how to nav pages
  // let navigate = useNavigate()
  // const routeChange = (path) =>{ 
  //   navigate(path);
  // }

  // this is for challenger adding name section

  const [formData, setFormData] = useState ({name: ""});
  const [loc, setLoc] = useState("")
  const formDataHandler = (event) => {
    const { name, value } = event.target;
    setFormData( {...formData, [name]: value})
  }
  const addNew = () => {
    const newlyAdded = {
      name: formData.name,
    }
  }

  function handleClick() {
    if(formData.name.length < 3) {
      alert('Name must be at least 3 characters!! >:(')
      setLoc("/challenger")
    }
    else {
      setLoc("/quiz")
    }
  }
  // function handleClick() {
  //   console.log(formData.name)
  // }
  // work on quiz portion
  // attempt to put the functions for quiz portion into this page
  // see if you can navigate with the buttons on challenger and on quiz page
  // don't cry lol

  // this is for the quiz section
  let i = 0
  const testbank = [
    "Two state solution",
    "Poopoo peepee",
    "I'm a pretty chill dude",
    "I have never farted in public",
    "I have seen more than one boob in person",
    "Watching ads makes me happy",
    "White people",
    "Ass and titties",
    "I wash my b***hole daily",
    "Cats",
    // pic1,
    // pic2,
    // pic3,
  ]

  // this did frigall--gave the alert twice and after just brought back to original page with buttons doing nothing the heck
  // function doneYet(x) {
    
  //   if(x === (testbank.length - 1)) {
  //     alert("done")
  //   }
  //   else {
  //     nextQ(x)
  //   }
  // }
  // function nextQ(y) {
  //   y++
  //   return (
  //     <Question qbody={testbank[y]} qnum={y + 1} onClick={(doneYet(y))}/>
  //   )

  // }

  // this is the actual bit for navigating

  const [curtext, setCurText] = useState("Next Question")
  const [page, setPage] = useState("/quiz")
  const [current, setCurrent] = useState(0)

  function areWeDoneYet() {
    if(current === (testbank.length - 1)) {
      console.log(testbank.length)
      setCurText("See Results")
      setPage("/results")
      
    }
    else {
      setCurrent(current + 1)
    }
  }


  return (
    <Router>
      <Routes>
        <Route exact path="/challenger" element={<Challenger onSubmit={addNew} onChange={formDataHandler} formData={formData} location={loc} onClick={handleClick}/>}/>
        <Route exact path="/quiz" element={<Quiz q={testbank} start={current} btntext={curtext} onClick={areWeDoneYet} location={page}/>}/>
        <Route exact path="/results" element={<IsItOverHenry enteredName={formData.name} onClick={() => setCurText("Next Question", setPage("/quiz"))}/>}/>
      </Routes>
    </Router>
  )
}

export default App
