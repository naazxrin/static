import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import './App.css'

const Body1 = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <>
    <div className='container'>
    <h4 id='paris' className='fw-bolder mt-5'>Learn More</h4>
      <Row id='paa' className='mt-5'>
        <Col><img style={{width:'100%',height:'400px'}} src="https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1321418885.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75" alt="" /></Col>
        <Col><h3 id='par'>PARIS</h3>
        <p>Explore the Beauty of paris! have a wonderful trip with your loved once or realax your self
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore facilis optio recusandae illum quod. Blanditiis officia consequatur, quae repudiandae at consectetur quisquam quia aut. Excepturi itaque quo similique? Reprehenderit, a? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quam expedita neque sequi. Dolore eveniet magni maiores eos atque voluptas nam reiciendis officiis tenetur voluptatibus assumenda tempora, quos commodi?</p>
          
          <Button id='onc'
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'View more'}
    </Button>
    </Col>

      </Row>
     
      </div>
      
    </>
  )
}

export default Body1