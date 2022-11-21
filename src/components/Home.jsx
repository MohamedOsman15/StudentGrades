import { useEffect, useState } from 'react'
import { Route, Routes, useParams, Link } from 'react-router-dom'
import Client from '../services/api'
import React from 'react'
import Students from './Students'

const Home = ({user, authenticated}) => {



  return (
    <div className="home">
      <h1>Welcome to Student Grade!</h1>
      <div className="homepage-links">
        <Link to="/students">View students</Link> | <Link to="/classes">View All Classes</Link> | <Link to="/new-class">Create New Class</Link> | <Link to="/new-student">Enroll New Student</Link>
      </div>
      <div className="home-render-div">
         <Routes>
          <Route path="/students" element={<Students />}></Route>
          {/* <Route path="/classes" element={<Classes />}></Route>
          <Route path="/new-class" element={<NewClass />}></Route>
          <Route path="/new-student" element={<NewStudent />}></Route> */}
         </Routes> 
      </div>
    </div>
  )
}

export default Home
