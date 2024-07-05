
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Resume } from './Pages/Resume'
import { Works } from './Pages/Works'
import { Blogs } from './Pages/Blogs'
import { Contact } from './Pages/Contact'
import { NotFound } from './Pages/NotFound'
import { LayoutOne } from './Layout/LayoutOne'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Works' element={<Works/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
