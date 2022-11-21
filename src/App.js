import './App.css'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'

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
      <h1>Student Grades</h1>
    </div>
  )
}

export default App
