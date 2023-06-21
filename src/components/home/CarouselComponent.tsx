import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img
          src="/carousel/1a.jpg"
          alt="foto2"
          className="w-72"
        />
      </div>
      <div>
        <img
          src="/carousel/1b.jpg"
          alt="foto1"
          className="w-96"
        />
      </div>
      <div>
        <img
          src="/carousel/1c.jpg"
          alt="foto2"
          className="w-72"
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;