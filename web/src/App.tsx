import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))

function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route 
        path='/login'
        element={
          <Suspense>
            <Login />
          </Suspense>
        }  
      />
    </Routes>
  )
}

export default App
