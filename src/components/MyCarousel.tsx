import { Carousel } from 'flowbite-react'

const MyCarousel = () => (
  <div className="grid gap-4 w-full aspect-video">
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
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
    </Carousel>
  </div>
)

export default MyCarousel
