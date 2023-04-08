import Header from './components/Header'
import MyCarousel from './components/MyCarousel'
import Nosotros from './components/Nosotros'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='w-10/12 m-auto'>
        <MyCarousel />
        <Nosotros />

        <h2>Sedes</h2>
        <p>Descubre nuestras sedes -{'>'} </p>
      </div>
    </div>
  )
}

export default App
