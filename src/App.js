import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Login from './Views/Login'

import CreateContent from './Views/CreateContent'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/creation" element={<CreateContent />} />
      </Routes>
    </div>
  )
}

export default App
