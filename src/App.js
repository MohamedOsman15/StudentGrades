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
      <h1>Student Grades</h1>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path='/login' element={
        <Login   
        setUser={setUser}
        toggleAuthenticated={toggleAuthenticated}
        />
        }/>
      </Routes>
    </div>
  )
}

export default App
