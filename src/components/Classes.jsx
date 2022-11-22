import { useState, useEffect } from 'react'
import { GetAllClasses } from '../services'
import ClassCard from './ClassCard'

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

      <div className="grid-container">
        {classes &&
          classes.map((course) => (
            <ClassCard key={course.id} course={course} />
          ))}
      </div>
    </div>
  )
}

export default Classes
