import Question from "../components/question";
// import pic1 from "/pics/pic1"
// import pic2 from "/pics/pic2"
// import pic3 from "/pics/pic3"

function Quiz() {
    let testbank = [
        "Two state solution",
        "I am like",
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
      let current = "";
      let count = 0;
    // let alreadyAsked = [];
    // let availableQuestions = [...testbank]
    // let count = (testbank.length - 1);
    
    const selectAQuestion = () => {
        current = testbank[count];
        count+=1;
        // const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        // alreadyAsked.push(availableQuestions[questionsIndex])
        // availableQuestions.splice(questionsIndex, 1);
        // console.log(availableQuestions)


    }
    const areWeDoneYet = () => {
        // if(alreadyAsked.length === testbank.length) {
        //     <button type="button" onChange={onChange}> see results </button>
        // } else {
        //     selectAQuestion()
        //     alert(`you are gay x${count}`)
        // }
        if(count === (testbank.length - 1)) {
            <button type="button" onChange={onChange}> see results </button>
        } else {
            selectAQuestion()
            alert(`you are gay x${count}`)
            return (
                <>
                <Question qbody={current} onChange1={areWeDoneYet()} onChange2={areWeDoneYet()} onChange3={areWeDoneYet()}/>
                </>
                )
        }
    }
    selectAQuestion()
    // return (
    //     <Question qbody={alreadyAsked[(alreadyAsked.length - 1)]} onChange1={areWeDoneYet()} onChange2={areWeDoneYet()} onChange3={areWeDoneYet()}/>
    //  )
}
Quiz()
export default Quiz
