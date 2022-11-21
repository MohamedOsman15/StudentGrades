import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <Link className="logo links" to="/">
        Student Grades
      </Link>

      <div className="links-container">
        {props.authenticated ? (
          <div>
            <Link className="links" to="/students">
              Students
            </Link>
            <Link className="links" to="/classes">
              Classes
            </Link>
            <Link className="links" onClick={props.signOut}>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar
