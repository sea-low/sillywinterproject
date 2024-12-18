// let total = 0;

// let choices = [];

// function computingTotal(choices) {
//     choices.map((x) => total+= x)
//     return total
// }

/*
agree = 1pt
neutral = 0pt
disagree = -1pt

10
9
8
7
6
5
4
3
2
1

if name == "Cody"
stinky = 100%

if name == "Rick"
stinky = 100%


*/

//really boofed it here--need to continue the

function accumulateScore(x) {
    let score = []
    let points = 0
    const assignPoints = (x) => {
        if(x === "option1") points += 1
        if(x === "option2") points += 0
        if(x === "option3") points -=1

        score.push(points)
    }
}

// const totalScore = (score) => {
//     let final = score.reduce((acc, curr) => acc + curr, 0)
//     return request.then((response) => response.data);
// }
export default accumulateScore()