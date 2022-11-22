import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetStudentDetails } from '../services'
import { convertToLetterGrade } from '../utils'

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

          <div className="grades-grid">
            {student.class_list.map((course) => (
              <div key={course.id} className="grade">
                <p className="course">{course.className}</p>
                <p className="letter-grade">
                  {convertToLetterGrade(course.StudentClassList.score)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentDetails
