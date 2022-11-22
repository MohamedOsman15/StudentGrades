import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetStudentDetails } from '../services'
import { convertToLetterGrade, calculateGpa } from '../utils'

const StudentDetails = () => {
  const [student, setStudent] = useState(null)
  const [gpa, setGpa] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    GetStudentDetails(id)
      .then((res) => {
        console.log(res)
        setStudent(res.data)

        const calculatedGpa = calculateGpa(res.data.class_list)
        setGpa(calculatedGpa)
      })

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
                <p className="course">
                  {`${course.className} ${course.gradeLevel}`}
                </p>
                <p className="letter-grade">
                  {convertToLetterGrade(course.StudentClassList.score)}
                </p>
              </div>
            ))}
          </div>
          <div className="gpa-container">
            <p>GPA: {gpa}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentDetails
