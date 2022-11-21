import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Signin from './components/routes/Signin'
import Register from './components/Register'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
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
      <h1>Student Grades</h1>

      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
