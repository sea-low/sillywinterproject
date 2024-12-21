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
  let testbank = [
    "Two state solution",
    "Poopoo peepee",
    "I'm a pretty chill dude",
    "Blaming someone else for your fart is socially acceptable",
    "I have seen more than one boob in person",
    "I enjoy watching ads",
    "White people",
    "Ass and titties",
    "It's okay to skip brushing if you are like super tired",
    "Cats.",
    "Racism.",
    "Crime is okay if you love someone",
    "It's them gat dang kids again",
    "Your mother.",
    "Tomato is actually pronounced 'tomato'",
    "If you find a money on the ground and there's no one around its fair game",
    "Throwing bread at solar salesmen like they are hungry hungry geese",
    "I get along well with others",
    "Banana bread bro?",
    "Drunk cigs dont count",
    "I have never told a lie ever",
    "Ugly people deserve less than non ugly people",
    "Pineapple on pizza is okay",
    "Ketchup is spicy",
    "I like to dance",
    "I would hold the homie's hand",
    "I am an organized person",
    "Dogs",
    "Birds are not a real pet",
    "Feet are gross"

    // pic1,
    // pic2,
    // pic3,
  ]
  // let testbank = [];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }



  // this gens a new test but only shows the first question??? also array length doesn't appear to be correct; just shuffles :/

  // function testGen() {
  //   let i = 0
  //   while(i < 10) {
  //     const indexGen = Math.floor(Math.random() * potentialQ.length)
  //     const currQ = potentialQ[indexGen]
  //     testbank.push(currQ)
  //     potentialQ.splice(indexGen, 1)
  //     i+=1
  //   }
  // }

  //randomized numarr but there are repeats (bad)
  // const numArr = Array.from({length: 10}, () => Math.floor(Math.random() * potentialQ.length))

  //
    // array of [...potneitalQ.length]
  // hack away numbers until it is the desired size
  // populate testbank with indexes given in numArr
  // UPDATE: not working out now but maybe come back to this if I'm still struggle bussing it

//   const numArr = Array.from({length: potentialQ.length}, (_, i) => i + 1)

//   const shrinker = (ar) => {
//   while(ar > 10) {
//     let randIndex = Math.floor(Math.random() * ar.length)
//     ar.splice(randIndex, 1)
//   }
// }
// shrinker(numArr)


// newTest() correctly makes a new randomized array but after q3 the array disappears?
// shows no more questions
// also it's for some reason called twice?

// function newTest() {
//    for(let i = 0; i < 10; i++) {
//     const indexGen = Math.floor(Math.random() * potentialQ.length)
//     const currQ = potentialQ[indexGen]
//     testbank.push(currQ)
//     potentialQ.splice(indexGen, 1)
//   }
//   return testbank
// }

  //  for(let i = 0; i < 10; i++) {
  //   const indexGen = Math.floor(Math.random() * potentialQ.length)
  //   const currQ = potentialQ[indexGen]
  //   testbank.push(currQ)
  //   potentialQ.splice(indexGen, 1)
  // }

  

  function start() {
    if(formData.name.length < 3) {
      alert('Name must be at least 3 characters!! >:(')
      setLoc("/challenger")
    }
    else {
      console.log(testbank)
      shuffleArray(testbank)
      setLoc("/quiz")
    }
  }

  // this is for selecting the questions



  // function addQ() {
  //   testbank.push(currQ)
  //   potentialQ.slice(indexGen, 1)
  // }

  // for(let i = 0; i < 10; i++) {
  //   const indexGen = Math.floor(Math.random() * potentialQ.length)
  //   const currQ = potentialQ[indexGen]
  //   testbank.push(currQ)
  //   potentialQ.splice(indexGen, 1)
  // }


  // this is stuffs for quiz page
  const [curtext, setCurText] = useState("Next Question")
  const [page, setPage] = useState("/quiz")
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(50)
  const [endtext, setEndText] = useState("")
  const [curQ, setCurQ] = useState("")

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
      setScore(score - (pointsGenerator()))
    } else if (c.checked) {
      setScore(score + pointsGenerator() + 20)
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

  let q = []
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
      console.log(score, testbank)
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
