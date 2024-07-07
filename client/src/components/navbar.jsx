

import { Link, useNavigate } from "react-router-dom"



const Nav = () => {

  const navigate = useNavigate()

  return (
    <>
      <nav>
        <div id="navWrapper">
          <div id="logoWrapper">
            <h2 onClick={() => navigate("/")}><span className="logoFirst">chef</span><span className="logoSecond">cipe</span></h2>
            <h5 id="navSubtext">..for chefs, by chefs</h5>
          </div>
          <div id="navLinks">
            <Link className="navLink" to="/recipes">Recipes</Link>
            <Link className="navLink" to="/bounties">Bounties</Link>
            <Link className="navLink" to="/profile">Profile</Link>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Nav