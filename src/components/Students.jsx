import { useState, useEffect } from 'react'
import { GetAllStudents } from '../services'

const Students = () => {
  const [students, setStudents] = useState(null)
  const [gpaView, toggleGpaView] = useState(false)
  

  useEffect(() => {
      GetAllStudents()
        .then((res) => setStudents(res.data))
        .catch((err) => console.log(err))
      }, [])

    

console.log(students)


let studentRaw = 0


  return (
    <div className="students">
      <h1>Students</h1>
      {students &&
        students.map(({name, class_list, email}, i) => (
          <div key={i} className="student-card">
            <p><b>Student:</b> {name}</p>
            <p><b>Email: </b>{email}</p>
              <div className="classes-on-card">
               <h4 className="card-classes-label">Classes:</h4>
                 {class_list.map((element, j) => (
                   <div key={j}className="classes-on-card">{element.className} - <i>Current Score: {element.StudentClassList.score}</i>
                   <div className="gpa-inv">{studentRaw = studentRaw + element.StudentClassList.score}</div>
                   </div>
                   ))}
                   <div className="gpa"><b>Overall GPA:</b> {studentRaw/class_list.length}</div>
               </div>
                  <div className="gpa-inv">{studentRaw=0}</div>
          </div>
        ))}
    </div>
  )
}

export default Students
