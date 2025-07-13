import { Sidebar } from "./components/Sidebar"
import { WorkFlows } from "./components/Workflows"


function App() {

  return (
    <div className="flex">
      <Sidebar/>
      <WorkFlows/>
    </div>
  )
}

export default App
