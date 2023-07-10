import {NavLink, Outlet} from 'react-router-dom'

function ProjectMenu() {
  return (
    <div className='projects'>
        <div className="flex">
            <span className='subtitle'>Projects</span>
            <NavLink className="project-link" to="townhouse">Townhouse</NavLink>
            <NavLink className="project-link" to="condominium">Condominium</NavLink>
        </div>
        <div className="project-list">
            <Outlet/>
        </div>
    </div>
  )
}

export default ProjectMenu