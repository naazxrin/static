import React from 'react'
import './App.css'

const Footer = () => {
  return (
    <div  style={{ height: '300px' }} className='container mt-5 w-100 '>
      <div id='foot' className="d-flex justify-content-between justify-content-center align-items-center ">
        <div style={{ width: '400px' }} className="intro">
          <img style={{width:'70px', height:'50px'}} src="./src/img/images-removebg-preview.png" alt="" />
          <h5><i className='fa-solid me-2'></i>Exlore</h5>
          <p>Exlore the World,see the beauty of all country with us,</p>
          <p>World Wide Explore Trip Package</p>
          <p>Travel the world</p>
        </div>
        <div className='d-flex flex-column'>
<ul>
 <a id='a' href=""> <li id='ll'>Details</li></a>
 <a id='a'  href=""><li id='ll'>Places</li>
 </a>
 <a id='a' href=""> <li id='ll'>Package</li>
 </a>
<a id='a'  href=""> <li id='ll'>City</li>
</a>
</ul>
        </div>
        <div className='d-flex flex-column'>
<ul>
 <a id='a' href=""> <li id='ll'>Our Video</li></a>
 <a id='a'  href=""><li id='ll'>View Our Blogs</li>
 </a>
 <a id='a' href=""> <li id='ll'>Guides</li>
 </a>
<a id='a'  href=""> <li id='ll'>Contact</li>
</a>
</ul>
        </div>
        <div className="d-flex flex-column ">
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input placeholder='Enter your email here' type="text" className='form-control' />
            <button className='btn btn-info ms-1'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='icons d-flex justify-content-between mt-3'>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-solid fa-phone'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy: June 2024 Batch , Media Player . Built with React .
      </p>
    </div>
  )
}

export default Footer