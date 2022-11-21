// import axios from 'axios'
import { useState } from 'react'
import { useParams, ulnk, useNavigate, Link } from 'react-router-dom'
import { SignIn } from '../services/auth'

const Login = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignIn(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="loginForm">
        <div>
          <h3>Email:</h3>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>
        <div>
          <h3>Password:</h3>
          <input
            type="text"
            onChange={handleChange}
            name="password"
            placeholder="password"
            value={formValues.password}
            required
          />
        </div>
        <button>Submit</button>
      </form>

      <div>
        <p>Don't have an account?</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}
export default Login
