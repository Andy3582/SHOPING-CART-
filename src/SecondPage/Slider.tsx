/** @format */

import Carousel from "react-bootstrap/Carousel";
import slide1 from "./assets/image1.jpg";
import slide2 from "./assets/image2.jpg";
import slide3 from "./assets/image3.jpg";
import "./Slider.css";

export default function Background() {
  return (
    <div className='container'>
      　　　
      <section className='slider container mb-3'>
        　　　{" "}
        <Carousel>
          　　　{" "}
          <Carousel.Item className='slide'>
            　　　{" "}
            <img className='d-block w-100' src={slide1} alt='First slide' />
            　　　{" "}
          </Carousel.Item>
          　　　{" "}
          <Carousel.Item className='slide'>
            　　　{" "}
            <img className='d-block w-100' src={slide2} alt='Second slide' />
            　　　{" "}
          </Carousel.Item>
          　　　{" "}
          <Carousel.Item className='slide'>
            　　　{" "}
            <img className='d-block w-100' src={slide3} alt='Third slide' />
            　　　{" "}
          </Carousel.Item>
          　　　{" "}
        </Carousel>
        　　　{" "}
      </section>
    </div>
  );
}
