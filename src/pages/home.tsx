import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const backToLogin = () => {
    navigate('/login')
    localStorage.removeItem('authdata')
  }

  useEffect(() => {
    const storedAuthData = localStorage.getItem('authData')
    if (!storedAuthData) {
      backToLogin()
      return
    }

    const { isAuthenticated, expires, identity: storedIdentity } = JSON.parse(storedAuthData)
    console.log('layout stored identity', storedIdentity) // identity here doesn;t have Identity type anymore
    const isExpired = new Date().getTime() > expires
    if (!isAuthenticated || isExpired) {
      backToLogin()
      return
    }
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home
