import './App.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Books from './Components/Books'
import NavbarComp from './Components/NavbarComp'
import AddBooks from './Components/AddBooks'
import EditItem from './Components/EditItem'
function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
        <NavbarComp/>
        <Routes>
        <Route exact path="" element={<Books/>}></Route>
        <Route  exact path="/addBooks" element={<AddBooks/>}></Route>
        <Route path="/dashboard/:id/edit" element={<EditItem />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
