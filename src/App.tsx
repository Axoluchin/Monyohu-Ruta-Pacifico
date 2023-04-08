import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sedes from './pages/Sedes'

import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/sedes" element={<Sedes />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
