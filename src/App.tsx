import { Outlet } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"


function App() {

  return (
    <div className="flex min-h-screen min-w-screen">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default App
