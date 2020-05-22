//Q1
const fs = require("fs");
const path = require("path")


function question1(fileName, content){

    return fs.writeFileSync(path.join(__dirname, fileName), content)

}
// console.log(question1("question1", "I hope to god this works"))

//Q2

function question2(fileName){
    return fs.readFileSync(path.join(__dirname, fileName))
}

console.log(question2("question1").toString())

