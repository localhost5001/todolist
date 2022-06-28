import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const Login = lazy(() => import('@/views/login'))

function App() {
  return (
    <Routes>
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
