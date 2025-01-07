import React, { useState } from "react";
import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Challenger from './pages/challenger.jsx'
import Quiz from './pages/quiz.jsx';
import IsItOverHenry from './pages/isitoverhenry.jsx';


// pic downloads
// import pic1 from "../pics/pic1.jpg"
// import pic2 from "../pics/pic2.jpg"
// import pic3 from "../pics/pic3.jpg"
// import pic4 from "../pics/pic4.jpg"
// import pic5 from "../pics/pic5.jpg"
// import pic6 from "../pics/pic6.jpg"
// import pic7 from "../pics/pic7.jpg"
// import pic8 from "../pics/pic8.jpg"
// import pic9 from "../pics/pic9.jpg"
// import pic10 from "../pics/pic10.jpg"
// import pic11 from "../pics/pic11.jpg"
// import pic12 from "../pics/pic12.jpg"
// import pic13 from "../pics/pic13.jpg"
// import pic14 from "../pics/pic14.jpg"
// import pic15 from "../pics/pic15.jpg"
// import pic16 from "../pics/pic16.jpg"
// import pic17 from "../pics/pic17.jpg"
// import pic18 from "../pics/pic18.jpg"


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
    "If you find a money on the ground and there's no one around you should immediately mail it to the government",
    "Throwing bread at solar salesmen like they are hungry hungry geese",
    "I get along well with others",
    "Banana bread bro?",
    "Drunk cigs dont count",
    "I have never told a lie ever",
    "Ugly people deserve less than non ugly people",
    "Pepperoni on pizza is wrong",
    "Ketchup is spicy",
    "I like to dance",
    "I would hold the homie's hand",
    "I am an organized person",
    "Dogs",
    "Birds are not a real pet",
    "Feet are gross"
  ]

  // let picbank = [
  //   pic1,
  //   pic2,
  //   pic3,
  //   pic4,
  //   pic5,
  //   pic6,
  //   pic7,
  //   pic8,
  //   pic9,
  //   pic10,
  //   pic11,
  //   pic12,
  //   pic13,
  //   pic14,
  //   pic15,
  //   pic16,
  //   pic17,
  //   pic18
  // ]
  let pics = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18
  ]

  // this is stuffs for quiz page
  const [curtext, setCurText] = useState("Next Question")
  const [page, setPage] = useState("/quiz")
  const [place, setPlace] = useState(0)
  const [score, setScore] = useState(50)
  const [endtext, setEndText] = useState("")
  const [curQ, setCurQ] = useState("")
  const [alreadyAsked, setAlreadyAsked] = useState([])

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
    if(place === 0 || b.checked) {
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

  // unique question gatherer

  function reshufflingTheDeck() {
      alreadyAsked.splice(0, (alreadyAsked.length - place))
      setAlreadyAsked(alreadyAsked)
  }

  function uniqueQ() {
    if(alreadyAsked.length === testbank.length) {
      reshufflingTheDeck()
    }
    
    let selected = testbank[Math.floor(Math.random() * testbank.length)]
    
    if(!alreadyAsked.includes(selected)) {
      alreadyAsked.push(selected)
      setAlreadyAsked(alreadyAsked)
      setCurQ(selected)
    } else {
      uniqueQ()
    }
  }

  function start() {
    if(formData.name.length < 3) {
      alert('Name must be at least 3 characters!! >:(')
      setLoc("/challenger")
    }
    else {
      setLoc("/quiz")
      uniqueQ()
    }
  }

  function areWeDoneYet() {
    if(place === 9) {
      setCurText("See Results")
      setPage("/results")
      settingTheEndText()
    }
    else {
      setPlace(place + 1)
      accumulateScore()
      uniqueQ()
      console.log(score, alreadyAsked)
      // score.push(points)
      // console.log(score)
    }
  }

  // back/end

  function restart() {
    setCurText("Next Question")
    setPage("/quiz")
    setPlace(0)
    setScore(50)
    setAlreadyAsked([])
    start()
  }


  return (
    <Router>
      <Routes>
        <Route exact path="/challenger" element={<Challenger onSubmit={addNew} onChange={formDataHandler} formData={formData} location={loc} onClick={start}/>}/>
        <Route exact path="/quiz" element={<Quiz q={curQ} start={place} btntext={curtext} onClick={areWeDoneYet} location={page}/>}/>
        <Route exact path="/results" element={<IsItOverHenry enteredName={formData.name} agt={endtext} onClick={restart}/>}/>
      </Routes>
    </Router>
  )
}

export default App
