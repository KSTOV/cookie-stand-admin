import { useAuth } from '../contexts/auth'
import CookieStandAdmin from "../components/CookieStandAdmin"

export default function Home() {
  const { user, login, logout } = useAuth()

  return (
    <>
      {user ? <CookieStandAdmin user={user} logout={logout}/> : <Login login={login}/>}
    </>
  )
}

function Login({ login }) {
  async function handleSubmit(event) {
    event.preventDefault()
    login(event.target.username.value, event.target.password.value)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="w-1/4 border-2 border-solid p-7 rounded-xl bg-green-300 border-green-500">
        <form onSubmit={handleSubmit} autoComplete="off">
          <fieldset>
            <label className="block m-2 mt-0 font-bold text-center" htmlFor="username">Username</label>
            <input className="block w-full p-2 m-2 mx-auto" type="text" name="username" placeholder="Username"></input>
            
            <label className="block m-2 mt-5 font-bold text-center" htmlFor="password">Password</label>
            <input className="block w-full p-2 m-2 mx-auto" type="password" name="password" placeholder="Password"></input>

            <button className="block w-full p-4 mx-auto mt-12 rounded bg-green-500">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}