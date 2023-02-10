aimport React from 'react'
import Favorite from './Favorite'
import NoFav from './NoFav'
import HasFav from './HasFav'
import {BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'


export default function Navbar(){
    return(
        <>
        <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <Link class="navbar-brand" to="/home">Fav Npm Packages-Assignment</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/nofav">NoFav</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/hasfav">hasFav</Link>
        </li>
              <li class="nav-item ">
              <Link to="/NoFav" className='btn btn-outline-dark ms-4'>sign up</Link>
              </li>
              <li class="nav-item">
              <Link to="/HasFav" className='btn btn-outline-primary ms-4'>sign in</Link>
              </li>
              <li class="nav-item">
              <i class="fa fa-window-restore ms-5" aria-hidden="true"></i>
              </li>
               <li class="nav-item ms-5 "> <Link class="navbar-brand" to="#">Whimsical</Link>
              </li>
             
             </ul>
            
          </div>
        
        </div>
       
              
      </nav>

      <Routes>
        <Route exact path="/home" element={<Favorite />}></Route>
        <Route exact path="/nofav" element={<NoFav />}></Route>
        <Route exact path="/hasfav" element={<HasFav />}></Route>
      </Routes>
      </Router>

   
      
       </> 
    )
}