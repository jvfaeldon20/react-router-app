import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header>
        <h2>MEGAESTATE</h2>
        <nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="projects">Projects</NavLink>
            <NavLink className="nav-link" to="about">About</NavLink>
            <NavLink className="nav-link" to="contact">Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar