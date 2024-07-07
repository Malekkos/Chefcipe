

import { Link, useNavigate } from "react-router-dom"



const Nav = () => {

  const navigate = useNavigate()

  return (
    <>
      <nav>
        <div id="navWrapper">
          <div>
            <h2 onClick={() => navigate("/")}><span id="logoFirst"></span>chef<span id="logoSecond">cipe</span></h2>
            <h5 id="navSubtext">..for chefs, by chefs</h5>
          </div>
          <div id="navLinks">
            <Link to="/recipes">Recipes</Link>
            <Link to="/bounties">Bounties</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Nav