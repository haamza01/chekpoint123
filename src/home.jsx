import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from './image1.jpg'
import img2 from './image2.jpg'
import img3 from './image3.jpg'

function Home() {
  return (
    <div>
   <Carousel   style={{width:'40%' , height:'40%'}}   >
  <Carousel.Item>
    <img
      className="imagecar"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Game of thrones</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imagecar"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>GOOD DOCTOR</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imagecar"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:'gold'}}>Breaking bad</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}
export default Home;
