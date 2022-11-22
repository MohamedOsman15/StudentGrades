import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'


const NewClass = () => {
  const navigate = useNavigate()
  const initialValues = {
    className: "",
    gradeLevel: "",
    studentId: "2"
  }
  const [formValues, setFormValues] = useState(initialValues)
  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      ...formValues
    }
      await Client.post(`/api/classes`, data)
      navigate("/")
    }


  return ( 
  <div className="new-class">
    <div className='form'>
      <form>
        <div>
      <label htmlFor="className">Class Name:</label>
          <input
            type="className"
            onChange={handleChange}
            id="className"
            name="className"
            placeholder="Class"
            value={formValues.className}
            required
          />
          </div>
          <div>
      <label htmlFor="gradeLevel">Grade Level:</label>
          <input
            type="gradeLevel"
            onChange={handleChange}
            id="gradeLevel"
            name="gradeLevel"
            placeholder="Grade #"
            value={formValues.gradeLevel}
            required
          />
          </div>
          <button onClick={handleSubmit} className="btn">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default NewClass
