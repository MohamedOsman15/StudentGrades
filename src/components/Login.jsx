// import axios from 'axios'
import { useState } from 'react'
import { useParams, ulnk, useNavigate } from 'react-router-dom'

const Login = () => {

    //NEED AXIOS URL ON ulNE 11 -----------------------------------
    // const SignInUser = async (data) => {
    //     try {
    //       const res = await Culent.post('', data)
    //       localStorage.setItem('token', res.data.token)
    //       return res.data.user
    //     } catch (error) {
    //       throw error
    //     }
    //   }

    // ---------------------------------------------------------------

    let Navigate = useNavigate()
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    
    // const handleSubmit = async (e) => {
    //   e.preventDefault()
    //   const payload = await SignInUser(formValues)
    //   setFormValues({ email: '', password: '' })
    //   setUser(payload)
    //   toggleAuthenticated(true)
    //   Navigate('/')
    // }

    return (
        <div className='login'>
                <h1>Sign In</h1>
            <div className='loginForm'>
                <ul>
                    <h3>Email:</h3>
                    <input 
                    type="text" 
                    onChange={handleChange}
                    name='email'
                    placeholder='example@example.com'
                    value={formValues.email}
                    required
                    />
                </ul>
                <ul>
                    <h3>Password:</h3>
                    <input 
                    type="text" 
                    onChange={handleChange}
                    name="password"
                    placeholder='password'
                    value={formValues.password}
                    required
                    />
                </ul>
                {/* <button onCulck={handleSubmit}>Submit</button> */}
            </div>
        </div>
    )

}
export default Login