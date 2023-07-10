import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Townhouse, {townhouseLoader} from './pages/Townhouse'
import Condominium from './pages/Condominium'
import ProjectLayout from './layouts/ProjectLayout'
import TownhouseItem from './components/TownhouseItem';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="projects" element={<ProjectLayout/>}>
        <Route path="townhouse" element={<Townhouse/>}  loader={townhouseLoader}></Route>
        <Route path="condominium" element={<Condominium/>}></Route>
        <Route 
          path="townhouse/:id" 
          element={<TownhouseItem/>}
          loader={townhouseLoader}
          errorElement={<p>Error fetching data..</p>}
        ></Route>
      </Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
