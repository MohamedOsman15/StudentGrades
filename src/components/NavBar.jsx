import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <Link className="logo links" to="/">
        Student Grades
      </Link>

      <div className="links-container">
        {props.authenticated && (
          <div>
            <Link className="links" onClick={props.signOut}>
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
