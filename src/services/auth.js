import Client from './api'

export const SignIn = (data) => {
  try {
    const res = Client.post('/signin', data)

    localStorage.setItem('token', res.data.token)
    res.data.user
  } catch (err) {
    throw err
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/session')
    return res.data
  } catch (error) {
    throw error
  }
}
