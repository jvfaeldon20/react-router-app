import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
  return (
    <div className='root'>
        <Navbar/>        
        <main className='main'>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout