import { useEffect, useState } from 'react'
import { Route, Routes, useParams, Link } from 'react-router-dom'
import Client from '../services/api'
import React from 'react'
import Students from './Students'

const Home = ({ user, authenticated }) => {
  return (
    <div className="home">
      <div>
        <h1>Welcome to Student Grade!</h1>
        <div className="homepage-links">
          <Link to="/students">View students</Link> |{' '}
          <Link to="/classes">View All Classes</Link> |{' '}
          <Link to="/classes/new">Create New Class</Link> |{' '}
          <Link to="/students/new">Enroll New Student</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
