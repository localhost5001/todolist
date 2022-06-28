import { useState } from 'react'

const login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onForgotPasswordClick = () => {

  }

  const onLoginClick = () => {

  }

  return (
    <div 
      className='
        h-screen w-full
        grid place-items-center
      '
    >
      <div 
        className='
          flex flex-col 
          md:w-1/3 md:px-0 max-w-lg space-y-3
          w-full px-1
        '
      >
        <input 
          type="text" placeholder='Login' 
          className='input input-primary' 
          defaultValue={login} onChange={e => setLogin(e.target.value)} 
        />
        
        <input 
          type="password" placeholder='Password' 
          className='input input-primary' 
          defaultValue={password} onChange={e => setPassword(e.target.value)} 
        />

        <button 
          className='btn' 
          onClick={onLoginClick}
        >
          Login
        </button>

        <button 
          className="btn btn-ghost"
          onClick={onForgotPasswordClick}
        >
          Forgot password?
        </button>
      </div>
    </div>
  )
}

export default login
