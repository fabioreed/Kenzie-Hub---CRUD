import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PageNotFound from '../pages/PageNotFound'
import Dashboard from '../pages/Dashboard'
import HomePage from '../pages/HomePage'
import ProtectedRoutes from '../pages/ProtectedRoutes'
import TechContext from '../components/providers/TechContext'

function AppRoutes() {
      
  return (
    <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/homepage' element={ <HomePage /> } />
        <Route path='*' element={ <PageNotFound /> } />
        
        <Route path='/dashboard' element={ <ProtectedRoutes /> }>
        <Route path='/dashboard'
          element={
          <TechContext>
            <Dashboard />
          </TechContext>} />
        </Route>
    </Routes>
  )
}

export default AppRoutes