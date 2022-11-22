import { useNavigate } from 'react-router-dom'

const StudentCard = ({ student }) => {
  let navigate = useNavigate()

  return (
    <div className="student-card">
      <div
        key={student.id}
        className="student-card"
        onClick={() => navigate(`/students/${student.id}`)}
      >
        <p>{student.name}</p>
        <p>{student.email}</p>
      </div>
    </div>
  )
}

export default StudentCard
