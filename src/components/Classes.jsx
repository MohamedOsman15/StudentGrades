import { useState, useEffect } from 'react'
import { GetAllClasses } from '../services'

const Classes = () => {
  const [classes, setClasses] = useState(null)

  useEffect(() => {
    GetAllClasses()
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="classes">
      <h1>Classes</h1>

      {classes &&
        classes.map((course) => (
          <div key={course.id} className="class-card">
            <p>{course.className}</p>
            <p>{course.gradeLevel}</p>
          </div>
        ))}
    </div>
  )
}

export default Classes
