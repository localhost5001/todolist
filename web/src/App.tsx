import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Layout from '@/components/layout'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))
const NotFound = lazy(() => import('@/views/notFound'))

function SuspenseFallback() {
  return <div className='h-screen w-full grid place-items-center'>Loading...</div>
}

function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={<Layout />}
      >
        <Route 
          index
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route 
          path='/login'
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <Login />
            </Suspense>
          }  
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
