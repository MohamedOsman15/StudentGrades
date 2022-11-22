import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Welcome to Student Grade!</h1>
        <div className="homepage-links">
          <Link className="btn" to="/students">
            View Students
          </Link>
          <Link className="btn" to="/classes">
            View All Classes
          </Link>
          <Link className="btn" to="/classes/new">
            Create New Class
          </Link>
          <Link className="btn" to="/students/new">
            Enroll New Student
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
