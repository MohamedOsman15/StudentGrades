const ClassCard = ({ course }) => {
  return (
    <div className="class-card">
      <p><b>Course Name: </b>{course.className}</p>
      <p><b>Grade Level: </b>{course.gradeLevel}</p>
    </div>
  )
}

export default ClassCard
