import React from 'react'

const Header = () => {
  return (
    <div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Event Management  APP</a>
        
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/">Addevent</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/search">Searchevent</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/view">View</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
        </div>
  )
}

export default Header