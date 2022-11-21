import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/auth'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const signOut = () => {
    toggleAuthenticated(false)
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar authenticated={authenticated} signOut={signOut} />
      </header>


      <main>
        <Routes>
          <Route
            path="/home"
            element={<Home user={user} authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
        </Routes>
      </main>

    </div>
  )
}

export default App
