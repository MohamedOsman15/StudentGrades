import { useState, useEffect } from 'react'
import { GetAllStudents } from '../services'

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

      {students.map((student) => (
        <div className="student-card">
          <p>{student.name}</p>
          <p>{student.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Students
