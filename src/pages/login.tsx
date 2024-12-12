import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuths } from '@/components/nfid-auth'

const Login = () => {
  // @ts-ignore
  const { isAuthenticated, identity, principal, login } = useAuths()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated || !identity || !principal) return
    console.log('login effect auth', isAuthenticated)
    console.log('login effect identity', identity) // identity here has an Identity type
    console.log('login effect principal', principal)
    const authData = {
      isAuthenticated,
      expires: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      principal,
      identity,
    }
    localStorage.setItem('authData', JSON.stringify(authData))

    navigate('/')
  }, [isAuthenticated, identity])

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => login()}> Click to sign in</button>
    </div>
  )
}

export default Login
