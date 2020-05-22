const fs = require("fs");
const path = require("path")

const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}
const getRandomNumber = max => Math.floor(Math.random() * max);

class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.grades = grades
    }
    static generateRandomStudents(numOfStudents) {
        let students = []
        for (let i = 0; i < numOfStudents; i++) {
            let newStudent = new Student(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(45) + 18, getRandomNumber(100) + 0);
            students.push(newStudent)
        }
        return students;

    }
    static writeJsonFile() {
        return fs.writeFileSync
        (path.join(__dirname, "NewJsonFile.json"), JSON.stringify(Student.generateRandomStudents(5)))
    }

    static readJsonFile(){
        let jsonRaw = fs.readFileSync(path.join(__dirname, "NewJsonFile.json"));
        return JSON.parse(jsonRaw.toString())
    }

}

// console.log(Student.generateRandomStudents(5))

// console.log(Student.writeJsonFile())
console.log(Student.readJsonFile())


/*
let jsonRaw = fs.readFileSync(path.join(__direname, file))
let my objects = JSON.parse(jsonRaw.toSTring())
*/