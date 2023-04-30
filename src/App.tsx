import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sedes from './pages/Sedes'

import Layout from './components/Layout'

const App = () => {
  return (
    <div className="App bg-back text-text bg-[url('/images/patternBeach.webp')] bg-repeat bg-center">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sedes" element={<Sedes />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
