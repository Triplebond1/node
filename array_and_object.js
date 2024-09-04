
    // using flat array 
 const student = [  {name :'tolu', age: 15, grade: 'A'},
                    {name :'kola', age: 20, grade: 'B'},
                    {name :'biodun', age: 18, grade: 'A'},
                    {name :'ayanda', age: 19, grade: 'B'}, 
                ]
          
const filterByGrade =  (students, grades) => {
            return students.filter((students) => students.grade === grades )
         }

const averageAge = (student) => {
    const totalAge = student.reduce((sum, student) => sum + student.age, 0)
    return averageStudentAge = totalAge/student.length
} 




console.log(filterByGrade(student, "A"));
console.log(filterByGrade(student, "B"));
console.log(averageAge(student))





