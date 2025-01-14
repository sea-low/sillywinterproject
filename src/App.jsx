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

// 09 Jan 2025:
// need to figure out making pics visible:
// have pic visibility var and have the quiz section modified

// pic downloads
import Pic1 from "./pictures/pic1.jsx"
import Pic2 from "./pictures/pic2.jsx"
import Pic3 from "./pictures/pic3.jsx"
import Pic4 from "./pictures/pic4.jsx"
import Pic5 from "./pictures/pic5.jsx"
import Pic6 from "./pictures/pic6.jsx"
import Pic7 from "./pictures/pic7.jsx"
import Pic8 from "./pictures/pic8.jsx"
import Pic9 from "./pictures/pic9.jsx"
import Pic10 from "./pictures/pic10.jsx"
import Pic11 from "./pictures/pic11.jsx"
import Pic12 from "./pictures/pic12.jsx"
import Pic13 from "./pictures/pic13.jsx"
import Pic14 from "./pictures/pic14.jsx"
import Pic15 from "./pictures/pic15.jsx"
import Pic16 from "./pictures/pic16.jsx"
import Pic17 from "./pictures/pic17.jsx"
import Pic18 from "./pictures/pic18.jsx"

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

  let pics = [
    <Pic1/>,
    <Pic2/>,
    <Pic3/>,
    <Pic4/>,
    <Pic5/>,
    <Pic6/>,
    <Pic7/>,
    <Pic8/>,
    <Pic9/>,
    <Pic10/>,
    <Pic11/>,
    <Pic12/>,
    <Pic13/>,
    <Pic14/>,
    <Pic15/>,
    <Pic16/>,
    <Pic17/>,
    <Pic18/>,
    null,

  ]

  // this is stuffs for quiz page
  const [curtext, setCurText] = useState("Next Question")
  const [page, setPage] = useState("/quiz")
  const [place, setPlace] = useState(0)
  const [score, setScore] = useState(50)
  const [endtext, setEndText] = useState("")
  const [curQ, setCurQ] = useState("")
  const [alreadyAsked, setAlreadyAsked] = useState([])

  const [prevPics, addToPrevPic] = useState([])
  const [curPic, setCurPic] = useState(0)
  const [picVisibility, setPicVisiblity] = useState(false)

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

  // unique picture selector

  function picSelector() {
    if(prevPics.length === pics.length) {
      prevPics.splice(0, 15)
      addToPrevPic(prevPics)
    }
    else {
      let selected = Math.floor(Math.random() * pics.length)
      if(!prevPics.includes(pics[selected])) {
        prevPics.push(pics[selected])
        addToPrevPic(prevPics)
        setCurPic(pics[selected])
        console.log(selected)
      }
    }
  }

  // unique question selector
  function reshufflingTheDeck() {
      alreadyAsked.splice(0, (alreadyAsked.length - place))
      setAlreadyAsked(alreadyAsked)
  }

  function isItPictureTime() {
    place === 3 ? setPicVisiblity(true) : setPicVisiblity(false)
  }

  function uniqueQ() {
    if(alreadyAsked.length === testbank.length) {
      reshufflingTheDeck()
    }
    
    let selected = testbank[Math.floor(Math.random() * testbank.length)]
    
    if(!alreadyAsked.includes(selected)) {
      isItPictureTime()
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
      picSelector()
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
      picSelector()
      console.log(score, curQ, place, picVisibility)
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
        <Route exact path="/quiz" element={<Quiz show={picVisibility} pic={pics[curPic]} start={place} btntext={curtext} onClick={areWeDoneYet} location={page}/>}/>
        <Route exact path="/results" element={<IsItOverHenry enteredName={formData.name} agt={endtext} onClick={restart}/>}/>
      </Routes>
    </Router>
  )
}

export default App

// Hi Professor Baker! My name is Clo--nice to meet you! 

// I will be attending both your CSCI 41 and CSCI 45 classes! I was one of the last to register due to returning back to school after all this time (with a bunch of units). Lucky for me, both these classes and my physics professor are taught by revered and beloved professors! The bad news is, the time slots are tight on one day, which I didn't think would be problem since they were both science classes and I assumed they would be in the same building. That is, until I looked at the parking when planning where I should park on what day. It turns out, my physics class is in the new science building which is quite a ways away. They only overlap on one day (Thursday). I am out of this class at 3:25 and in that one at 3:30. I was wondering if it was possible on that one day to leave a little early? If not, I let Professor Evans know that I have this class beforehand and may be a little late. I will say hello to you on the first day of class Tuesday to let you know which one is me. Again, if it isn't possible, I will do my best to work it out with professor Evans and if not, guess I'm gonna get some extra cardio every week haha. Either way, I just wanted to give you both a heads up either way.

// See you this week and looking forward to learning from you!

// Chloe (Clo) Prothro

// Hello Professor Evans! My name is Clo--nice to meet you!

// I am enrolled your physics 2A course! While I wasn't lucky enough to have first pick for class times/professors (returning to school while already having plenty of units under my belt) I was pretty lucky to still enroll with great and passionate professors. Bad news is on one day the time slot is pretty tight (5 minutes apart). That would be Thursday. When registering for my classes, I didn't think it would be a problem since I assumed they were in the same building. It's been a while since I have been to City and after reviewing a map to plan where I would need to park on what day, I realized the error of my ways. My comp sci class is in the old building and your's is in the new one! All that to say, there is a fair chance I will regularly be little late to Thursday's class.

// I also sent a message to my other professor asking if I could leave early on that day to gain a little more time to make it to your class the day they overlap (Thursdays). If I am unable to leave Professor Baker's class early, I will do my best to make your's on time--I'm sure my heart will be happy for the extra cardio haha  I read up the syllabus on your late policy but still wanted to let you know! I am excited to be here and will say hello on Monday so you know which one is me.

// See you this week and looking forward to learning from you!

// Chloe (Clo) Prothro
