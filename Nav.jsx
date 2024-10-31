import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Test from './Test'
import Home from './Home'
import About from './About'
import { auth} from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import Instagram from './Instagram'
import Post from './Post'


function Nav() {
    const user = useAuthState(auth);
    async function handleLogout() {
        await signOut(auth)
     }

  return (
    <>
      <BrowserRouter>
      <nav>
        {user[0] === null ? (<><h1>navbar</h1></>) :
        (<>
         {user && (<>
        <h2>{user[0]?.displayName}</h2>
        {/* <img src={user?.photoURL || } alt="profile-image" /> */}
        <img src={user[0]?.photoURL || "https://postimg.cc/mhk7TMtL"} alt="Profile" />
       </>)}
        </>)
        }
        {user[0] === null ? (<>
            <Link to='/test'>
        login
        </Link>
        </>) : (
            <>
              <button onClick={handleLogout} >
                Logout
              </button></>
        )}
       
        <Link to='/home'>
        Home
        </Link>
        <Link to='/about'>
        About
        </Link>
        <Link to='/instagram'>Instagram</Link>
        <Link to='/post'>post</Link>
      </nav>
      <Routes>
      <Route path='/test' Component={Test} />
      <Route path='/home' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/instagram' Component={Instagram} />
      <Route path='/post' Component={Post} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default Nav
