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
// import Question from "./components/question.jsx";
import IsItOverHenry from './pages/isitoverhenry.jsx';
// import RadioButtons from './components/radiobuttons.jsx'
// import RadioButtons from "./components/radiobuttons.jsx";


// import pic1 from "/pics/pic1"
// import pic2 from "/pics/pic2"
// import pic3 from "/pics/pic3"
// import { useNavigate } from "react-router-dom";

function App() {


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

  function start() {
    if(formData.name.length < 3) {
      alert('Name must be at least 3 characters!! >:(')
      setLoc("/challenger")
    }
    else {
      setLoc("/quiz")
      console.log(testbank)
    }
  }

  // this is for selecting the questions
  let potentialQ = [
    "Two state solution",
    "Poopoo peepee",
    "I'm a pretty chill dude",
    "Blaming someone else for your fart",
    "I have seen more than one boob in person",
    "Watching ads",
    "White people",
    "Ass and titties",
    "It's okay to skip brushing if you are like super tired",
    "Cats.",
    "Racism.",
    "A big ole steamer",
    "It's them gat dang kids again",
    "Your mother.",
    "Tomato is actually pronounced 'tomato'",
    "Becoming aware that you are currently breathing",
    "Egging solar salesmen",
    "I get along well with others",
    "Banana bread bro?",
    "Drunk cigs dont count"

    // pic1,
    // pic2,
    // pic3,
  ]
  const testbank = [];

  // function addQ() {
  //   testbank.push(currQ)
  //   potentialQ.slice(indexGen, 1)
  // }
  for(let i = 0; i < 10; i++) {
    const indexGen = Math.floor(Math.random() * potentialQ.length)
    const currQ = potentialQ[indexGen]
    testbank.push(currQ)
    potentialQ.splice(indexGen, 1)
  }


  // this is stuffs for quiz page
  const [curtext, setCurText] = useState("Next Question")
  const [page, setPage] = useState("/quiz")
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(50)
  const [endtext, setEndText] = useState("")

  // let score = []

  const pointsGenerator = () => {
    let x = Math.ceil(Math.random() * 12)
    return x + 10
  }

  const plusOrMinus = () => {
    let y = Math.ceil(Math.random() * 1)
    let z = 0;
    y === 1 ? z++ : z--
    return z
  }

  let a = document.getElementById('option1')
  let b = document.getElementById('option2')
  let c = document.getElementById('option3')
  const accumulateScore = () => {
    if(current === 0 || b.checked) {
      let v = plusOrMinus() * pointsGenerator()
      setScore(score + v)
    } else if (a.checked) {
      pointsGenerator()
      setScore(score - (pointsGenerator() + 20))
    } else if (c.checked) {
      setScore(score + pointsGenerator())
    }
    return score
  }

  const settingTheEndText = () => {
    if(score < 0) {
      setEndText("smells like roses")
    }
    else {
      setEndText(`is ${score} % stinky`)
    }
  }


  // to see if each is true

  function areWeDoneYet() {
    if(current === (testbank.length - 1)) {
      setCurText("See Results")
      setPage("/results")
      settingTheEndText()
    }
    else {
      setCurrent(current + 1)
      accumulateScore()
      console.log(score)
      // score.push(points)
      // console.log(score)
    }
  }

  // back/end

  function restart() {
    setCurText("Next Question")
    setPage("/quiz")
    setCurrent(0)
    setScore(50)
    start()
  }


  return (
    <Router>
      <Routes>
        <Route exact path="/challenger" element={<Challenger onSubmit={addNew} onChange={formDataHandler} formData={formData} location={loc} onClick={start}/>}/>
        <Route exact path="/quiz" element={<Quiz q={testbank} start={current} btntext={curtext} onClick={areWeDoneYet} location={page}/>}/>
        <Route exact path="/results" element={<IsItOverHenry enteredName={formData.name} agt={endtext} onClick={restart}/>}/>
      </Routes>
    </Router>
  )
}

export default App
