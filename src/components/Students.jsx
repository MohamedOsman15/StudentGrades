import { useState, useEffect } from 'react'
import { GetAllStudents } from '../services'
import StudentCard from './StudentCard'

const Students = () => {
  const [students, setStudents] = useState(null)

  useEffect(() => {
    GetAllStudents()
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="students">
      <h1>Students</h1>

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
