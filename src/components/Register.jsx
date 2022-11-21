import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const Register = () => {
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    schoolId: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setValues] = useState(initialValues)
  const [pass, setPass] = useState('matched')

  const handleChange = (e) => {
    setValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.password === formValues.confirmPassword) {
      await RegisterUser({
        email: formValues.email,
        password: formValues.password
      })
      setPass('matched')
      // setValues(initialValues)
      navigate('/signin')
    } else {
      setPass('unmatched')
    }
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="registerForm">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={formValues.email}
            placeholder="example@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="SchoolId">School Id:</label>
          <input
            type="text"
            id="schoolId"
            name="schoolId"
            onChange={handleChange}
            value={formValues.schoolId}
            placeholder="Enter School Id Number"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
            placeholder="Confirm Password"
          />
        </div>
        <div className={pass}>
          <p>Passwords must match</p>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
export default Register
