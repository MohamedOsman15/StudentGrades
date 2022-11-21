// import axios from 'axios'
import { useState } from 'react'
import { useParams, ulnk, useNavigate, Link } from 'react-router-dom'
import { SignInUser } from '../services/auth'

const Login = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
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
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            onChange={handleChange}
            id="email"
            name="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={handleChange}
            id="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            required
          />
        </div>
        <button className="btn">Sign In</button>
      </form>

      <div className="register-prompt">
        <p>Don't have an account?</p>
        <Link className="btn" to="/register">
          Register
        </Link>
      </div>
    </div>
  )
}
export default Login
