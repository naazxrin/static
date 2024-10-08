import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'


const Items1 = () => {
  return (
    <div className='container'>
        <h1 id='head'>Pick your fav Country</h1>
    <div id='flee' className='d-flex dlex-row justify-content-center align-items-center'>
        <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://media2.thrillophilia.com/images/photos/000/105/926/original/1527068774_shutterstock_657144271.jpg?w=753&h=450&dpr=1.5" />
      <Card.Body>
        <Card.Title className='text-dark'>Dubai</Card.Title>
        <h6 className='text-success fw-bolder'>2 week package available</h6>
        <Button  id='button1' variant="primary">View more</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/10/26135030/hangzhou.jpeg" />
      <Card.Body>
        <Card.Title className='text-dark'>China</Card.Title>
        <h6 className='text-success fw-bolder'>2 week package available</h6>
        <Button id='button1' variant="primary">View more</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://images.ctfassets.net/6xuvngqqn06x/1pICr1Jcp2UD2IYjvzZYGs/ee160cb8c9497a9590cde89eb262a337/47135865091_e305c7ce3a_k.jpg" />
      <Card.Body>
        <Card.Title className='text-dark'>Finland</Card.Title>
        <h6 className='text-success fw-bolder'>1 week package available</h6>
        <Button  id='button1' variant="primary">View More</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/a8/2c/caption.jpg?w=1400&h=1400&s=1" />
      <Card.Body>
        <Card.Title className='text-dark'>Paris</Card.Title>
        <h6 className='text-success'>2,3 week package available</h6>

        <Button  id='button1' variant="primary">View more</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Items1