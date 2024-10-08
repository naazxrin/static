import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'./App.css'
import { CardBody } from 'react-bootstrap';


const Body2 = () => {
  return (
    <>
    <div  className='bg-light'>
    <div   className='container d-flex flex-column justify-content-center align-items-center mt-5'>
    <h4 >View More places</h4>
    <p className='text-warning'>Pick up your fav destination for your wonderful and memorable journey</p>
    </div>
    <div id='carrr' className='d-flex dlex-row justify-content-center align-items-center'>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/67/aa/4e.jpg" />
      <Card.Body>
        <Card.Title className='text-warning'>Canada</Card.Title>
        <p>Skylon Tower, Niagara Falls Ontario Observation Deck Admission</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://media.cnn.com/api/v1/images/stellar/prod/230516112548-01-crossroads-maldives-aerial.jpg?c=original" />
      <Card.Body>
        <Card.Title className='text-warning'>Maldives</Card.Title>
        <p>Enjoy the Beauty of Sea Throught maldives</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aH3PABfJOZ3f6LODDujSAj4e2Z-Lwu0DAg&s" />
      <Card.Body>
        <Card.Title className='text-warning'>Manali</Card.Title>
        <p>It has a reputation as a backpacking center and honeymoon destination</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg" />
      <Card.Body>
        <Card.Title className='text-warning'>Thailand</Card.Title>
        <p> It's known for tropical beaches, opulent royal palaces</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://www.travelinghomeschoolers.com/wp-content/uploads/0-Disney-FBH-8.jpg" />
      <Card.Body>
        <Card.Title className='text-warning'>Disney World</Card.Title>
        <p> is an entertainment resort located about 20 miles southwest of Orlando</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    </div>
    <div id='carr' className='d-flex dlex-row justify-content-center align-items-center'>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/destgalleryimages/mmt/activities/m_Busan_1_l_667_1000.jpg" />
      <Card.Body>
        <Card.Title className='text-warning'>South Korea</Card.Title>
        <p>including palaces,theme parks, and shopping areas</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://www.akshartours.com/wp-content/uploads/2019/10/Malaysia-001-1.jpg" />
      <Card.Body>
        <Card.Title className='text-warning'>malaysia</Card.Title>
        <p> is an entertainment resort located about 20 miles southwest of Orlando</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1YEPIWvnIzWldgJX9x0RzyKw63srwfdstw&s" />
      <Card.Body>
        <Card.Title className='text-warning'>U.K </Card.Title>
        <p> The United Kingdom, made up of England, Scotland, Wales and Northern Ireland</p>
        <Button  id='button1' variant="primary"> More details</Button>
      </Card.Body>
    </Card>
    <Card id='card' className=' m-3' style={{ width: '18rem' }}>
      <Card.Img className='bg-light' style={{width:'100%',height:'200px'}} variant="top" src="https://i.ytimg.com/vi/ZeIHqebj4fo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaKjXlqYHlEpz1BXh7_2IkzVyvKw" />
      <Card.Body>
        <Card.Title className='text-warning'>Amsterdam</Card.Title>
        <p> Amsterdam is the Netherlands’ capital, known for its artistic heritage</p>
        <Button  id='button1' variant="primary">More details</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Body2