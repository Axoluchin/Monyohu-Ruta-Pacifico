import Header from '../components/Header'
import MyCarousel from '../components/MyCarousel'
import Nosotros from '../components/Nosotros'

const App = () => {
    return (
      <main className="">
        <Header />
        <div className='w-10/12 m-auto'>
          <MyCarousel />
          <Nosotros />
  
          <h2>Sedes</h2>
          <p>Descubre nuestras sedes -{'>'} </p>
        </div>
      </main>
    )
  }
  
  export default App
  