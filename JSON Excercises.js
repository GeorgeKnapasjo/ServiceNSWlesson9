class Student{
    constructor(firstName, lastName, age, grades){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.grades = grades
    }
  q1String(){
      return JSON.stringify(this)
  }
  static q2String(me2){
      let obj = JSON.parse(me2)
      return new Student(obj.firstName, obj.lastName, obj.age, obj.grades)
  }
}
let me = new Student("george", "Knapasjo", 21, [89, 91, 92, 79])
let me2 = '{"firstName":"george","lastName":"Knapasjo","age":21,"grades":[89,91,92,79]}'
console.log(me.q1String())
console.log(Student.q2String(me2))

let meAsJson = me.q1String()

console.log()
