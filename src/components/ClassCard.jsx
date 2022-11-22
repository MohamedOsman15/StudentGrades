const ClassCard = ({ course }) => {
  return (
    <div className="class-card">
      <p>{course.className}</p>
      <p>{course.gradeLevel}</p>
    </div>
  )
}

export default ClassCard
