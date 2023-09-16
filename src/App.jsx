import LeftColumn from "./components/LeftColumn"
import Navbar from "./components/Navbar"
import RightColumn from "./components/RightColumn"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
