import { useState, useEffect } from 'react'
import { GetAllStudents } from '../services'
import StudentCard from './StudentCard'

const Students = () => {
  const [students, setStudents] = useState(null)
  let curStudent = null

  
  useEffect(() => {
    GetAllStudents()
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleChange = (e) => {
    curStudent = e.target.value 
  }

const handleClick = (e) => {
  console.log(curStudent)
  const singleStudent = students.filter(student => student.name === curStudent)
  console.log(singleStudent)
  setStudents(singleStudent)
  }

  console.log(students)
  return (
    <div className="students">
      <h1>Students</h1>

      <div className="search-student-div">
      <h5>Filter By Student Name:</h5>
        <input 
        className="search-student-input" 
        id="student-filter"
        placeholder="Student-Name"
        onChange={handleChange}
        ></input>
        <button className="btn" id="student-filter" onClick={handleClick}>Filter</button>
      </div>
      <div className="grid-container">
        {students &&
          students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
      </div>
    </div>
  )
}

export default Students
