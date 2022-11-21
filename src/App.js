import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [authenticated, toggleAuthenticated] = useState(true)
  const [user, setUser] = useState(null)

  const signOut = () => {
    toggleAuthenticated(false)
    setUser(null)
  }

  return (
    <div className="App">
      <header>
        <NavBar authenticated={authenticated} signOut={signOut} />
      </header>

      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/signIn"
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
