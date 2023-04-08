import Landing from '../components/Landing'
import MyCarousel from '../components/MyCarousel'
import Nosotros from '../components/Nosotros'

const Home = () => {
    return (
      <main className="">
        <Landing/>
        <div className='w-11/12 md:w-10/12 m-auto'>
          <MyCarousel />
          <Nosotros />
        </div>
      </main>
    )
  }
  
  export default Home
  