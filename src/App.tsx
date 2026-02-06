import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home, PropertyDetails } from './pages';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
    </Router>
  )
}

export default App
