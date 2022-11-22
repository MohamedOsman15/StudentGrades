import { useNavigate } from 'react-router-dom'

const StudentCard = ({ student }) => {
  let navigate = useNavigate()

  return (
    <div
      className="student-card"
      onClick={() => navigate(`/students/${student.id}`)}
    >
      <h2>{student.name}</h2>
      <h3>{student.email}</h3>
    </div>
  )
}

export default StudentCard
