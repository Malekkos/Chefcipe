
import { Outlet } from "react-router-dom"

import Nav from "./navbar"

const Main = () => {


  return (
    <>
      <Nav />
      <Outlet />
    </>

  )
}


export default Main