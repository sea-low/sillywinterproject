import { useState } from 'react'
import Challenger from './pages/challenger'
import Quiz from './pages/quiz';
import IsItOverHenry from './pages/stinky';
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


  return (
    <>
    <Challenger onSubmit={handleClick()} onChange={formDataHandler} formData={formData} onClick={addNew}/>
    <Quiz />
    <IsItOverHenry enteredName={formData.name}/>
    <a href="results.jsx"></a>
    <div>
      
    </div>
    </>
  )
}

export default App
