import { Outlet } from "react-router-dom"


function MainLayout() {
  return (
    <div>
      Navber
      <Outlet />
      footer
    </div>
  )
}

export default MainLayout
