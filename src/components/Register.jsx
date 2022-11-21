import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const Register = () => {
  const navigate = useNavigate()
  const initialValues = {
    email: '',
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
      setValues(initialValues)
      navigate('/signin')
    } else {
      setPass('unmatched')
    }
  }

  return (
    <div className="register">
      <h1>Register For A New Account</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="registerForm">
        <div>
          <h3>Email:</h3>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formValues.email}
            placeholder="example@example.com"
            required
          />
        </div>
        <div>
          <h3>Password:</h3>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={formValues.password}
            placeholder="Password"
          />
        </div>
        <div>
          <h3>Confirm Password</h3>
          <input
            type="text"
            name="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <p>Passwords must match</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Register
