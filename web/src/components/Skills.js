import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Carousel from 'react-multi-carousel';
import img1 from '../assets/img/haber1.png';
import img2 from '../assets/img/haber2.png';
import img3 from '../assets/img/haber3.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Comodo Bee</h2>
              <p>Comodo Bee’nin sunduğu yenilikleri keşfedin!<br /> Akıllı kovan teknolojisi ile geleceğe adım atın.</p>

              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="carousel-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 1
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 1
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1
                  }
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <img src={img1} alt="Comodo Bee 1" />
                <img src={img2} alt="Comodo Bee 2" />
                <img src={img3} alt="Comodo Bee 3" />
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );

}
