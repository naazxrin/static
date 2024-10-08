import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Body = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img style={{width:'100%',height:'600px'}} src="https://a.eu.mktgcdn.com/f/100004519/N2BB4ohwclor2uLoZ7XMHgJmxOZaMOokMdQqqXQAq3s.jpg" alt="" text="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%',height:'600px'}} src='https://www.traveldailymedia.com/assets/2023/03/shutterstock_632941031.jpg' text="Second slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%', height:'600px'}} src='https://cdn.britannica.com/69/156369-050-75E7FD08/skyline-Dubai-United-Arab-Emirates.jpg' text="Third slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Body