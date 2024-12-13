import Question from "../components/question";
// import pic1 from "/pics/pic1"
// import pic2 from "/pics/pic2"
// import pic3 from "/pics/pic3"

function Quiz({onSubmit, onChange}) {
    const testbank = [
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
    
    // this also exceeded max call stack size: 

    // let i = 0

    // const currentQuestion = (i) => {
    //     return (
    //         <Question qbody={testbank[i]} qnum={i + 1} onChange={nextQuestion()}/>
    //     )
    // }
    // const lastQuestion = () => {
    //     return (
    //         <Question qbody={testbank[i]} qnum={i+ 1} onChange={console.log("done!")}/>
    //     )
    // }
    // const nextQuestion = (i) => {
    //     if(i === (testbank.length - 1)) {
    //         return lastQuestion()
    //     } else {
    //     return i+= 1
    //     }
    // }
    // while(i < (testbank.length - 1)) {
    //     currentQuestion(i);
    //     nextQuestion(i);
    // }

    //for loop not working at all atm; froze screen in loading zone:

    // for(let i = 0; i < testbank.length; ++i) {
    //     if(i === (testbank.length - 1)) {
    //         return (
    //             <div>
    //                 <button type="submit" onSubmit={onSubmit}>see results</button>
    //             </div>
    //         )
    //     }
    //     else {
    //         return(
    //             <Question qbody={testbank[i]} qnum={i+1} />
    //         )
    //     }
    // }

    //max stack size exceeded apparently lol:

    // let i = 0
    // const nextQ = () => {
    //     if(i === (testbank.length - 1)) {
    //         return (
    //             <div>
    //                 <button type="submit" onSubmit={onSubmit}>see results</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //         <Question qbody={testbank[i]} qnum={i} onChange={nextQ()}/>
    //         )
    //     }
    // }
    // nextQ()
    

    
    //with a while loop, said the onChange isn't supposed to give a number:

    // let i = 0;
    // if(i === (testbank.length - 1)) {
    //     return (
    //         <div>
    //         <button type="submit" onSubmit={onSubmit}>see results</button>
    //         </div>
    //     )
    // }
    // while(i < (testbank.length - 1)) {
    //     return (
    //         <Question qbody={testbank[i]} onChange={i + 1}/>
    //     )
    // }

    //gave literally nothing but a blank page; unsure why:

    // let i = 0;
    // const nextQuestion = () => {
    //     i+=1
    // }
    // if(i === (testbank.length - 1)) {
    //     return (
    //         <div>
    //         <button type="submit" onSubmit={onSubmit}>see results</button>
    //         </div>
    //     )
    // }
    // while(i < (testbank.length - 1)) {
    //     <Question qbody={testbank[i]} qnum={i + 1} onChange={() => i+=1}/>
    // }


    //with a function and extra steps:

    // //   let current = "";
    // //   let count = 0;
    // // // let alreadyAsked = [];
    // // // let availableQuestions = [...testbank]
    // // // let count = (testbank.length - 1);
    
    // // const selectAQuestion = () => {
    // //     current = testbank[count];
    // //     count+=1;
    // //     // const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    // //     // alreadyAsked.push(availableQuestions[questionsIndex])
    // //     // availableQuestions.splice(questionsIndex, 1);
    // //     // console.log(availableQuestions)
    // // }
    // const areWeDoneYet = () => {
    //     // if(alreadyAsked.length === testbank.length) {
    //     //     <button type="button" onChange={onChange}> see results </button>
    //     // } else {
    //     //     selectAQuestion()
    //     //     alert(`you are gay x${count}`)
    //     // }
    //     if(count === (testbank.length - 1)) {
    //         <button type="button" onChange={onChange}> see results </button>
    //     } else {
    //         selectAQuestion()
    //         alert(`you are gay x${count}`)
    //         // return (
    //         //     <>
    //         //     <Question qbody={current} onChange1={onChange1} onChange2={onChange2} onChange3={onChange3}/>
    //         //     </>
    //         //     )
    //     }
    // }
    // selectAQuestion()
    // return (
    //     <Question qbody={alreadyAsked[(alreadyAsked.length - 1)]} onChange1={areWeDoneYet()} onChange2={areWeDoneYet()} onChange3={areWeDoneYet()}/>
    //  )
}
export default Quiz
