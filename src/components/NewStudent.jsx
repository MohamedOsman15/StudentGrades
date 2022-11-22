import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'


const NewStudent = () => {
  const navigate = useNavigate()
  const initialValues = {
    name: "",
    email: "",
    schoolId: ""
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
      await Client.post(`/api/students`, data)
      navigate("/")
    }

  return ( 
  <div className="new-class">
    <div className='form'>
      <form>
        <div>
      <label htmlFor="name">Name:</label>
          <input
          type='text'
          onChange={handleChange}
          name='name'
          value={formValues.name}
          placeholder='Name'
          required
          />
          </div>
          <div>
      <label htmlFor="email">Email:</label>
          <input
          type='email'
          onChange={handleChange}
          name='email'
          placeholder='Email'
          value={formValues.email}
          required
     
          />
          </div>
          <div>
      <label htmlFor="schoolId">School ID Number:</label>
          <input
          type='schoolId'
          onChange={handleChange}
          name='schoolId'
          placeholder='School Id'
          value={formValues.schoolId}
          required
     
          />
          </div>
          <button onClick={handleSubmit} className="btn">Submit</button>
      </form>
    </div>
  </div>
  )
}


export default NewStudent