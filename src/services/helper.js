// const testbank = [
//   "Two state solution",
//   "I am like",
//   "I'm a pretty chill dude",
//   "I have never farted in public",
//   "I have seen more than one boob in person",
//   "Ads make me angry horny",
//   "White people",
//   "Chortle my balls",
//   "I wash my b***hole daily",
//   "Cats",
// ]
// Pulling new question

// getNewQuestion = () => {
//   if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//     return window.location.assign("BJ end.html")
//   }
// }

// let navigate = useNavigate()

// const routeChange = (path) =>{
//   navigate(path);
// }
const challengerformDataHandler = (event) => {
  const { name, value } = event.target
  setFormData({ ...formData, [name]: value })
}
const challengerAddNew = (event) => {
  event.preventDefault()

  const newlyAdded = {
    name: formData.name,
  }
}
function challengerHandleClick() {
  console.log(formData.name)
}

export default {
  challengerformDataHandler,
  challengerAddNew,
  challengerHandleClick,
}
