import { Carousel } from 'flowbite-react'

const MyCarousel = () => (
  <div className="grid gap-4 m-auto aspect-video shadow-xl">
    <Carousel className="" slide={false}>
      <video controls muted autoPlay>
        <source src="/video/VideoTestimonios.mp4" type="video/mp4" />
      </video>
      <img
        src="/images/NuevaSede.png"
        alt="..."
        className="h-full object-contain"
      />
      <img
        src="/images/Portada1.png"
        alt="..."
        className="h-full object-contain"
      />
      <img
        src="/images/Portada2.png"
        alt="..."
        className="h-full object-contain"
      />
    </Carousel>
  </div>
)

export default MyCarousel
