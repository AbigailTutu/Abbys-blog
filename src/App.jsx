import { BrowserRouter } from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Routing from './Routing'

function App() {

  return (
    <BrowserRouter>
    <div className="nav">
       <Navbar/>
    </div>
    
       <Routing/>
      
    </BrowserRouter>
  )
}

export default App


// <div className="content">
// </div>