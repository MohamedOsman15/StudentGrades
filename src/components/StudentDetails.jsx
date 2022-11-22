import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetStudentDetails } from '../services'

const StudentDetails = () => {
  const [student, setStudent] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    GetStudentDetails(id)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="student-details">
      {student && (
        <div>
          <h1>{student.name}</h1>
          <h2>{student.email}</h2>
        </div>
      )}
    </div>
  )
}

export default StudentDetails
