import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAllStudents } from '../services'

const Students = () => {
  const [students, setStudents] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    GetAllStudents()
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="students">
      <h1>Students</h1>

      {students &&
        students.map((student) => (
          <div
            key={student.id}
            className="student-card"
            onClick={() => navigate(`/students/${student.id}`)}
          >
            <p>{student.name}</p>
            <p>{student.email}</p>
          </div>
        ))}
    </div>
  )
}

export default Students
