import React from 'react'
import './App.css'

const Experts = () => {
  return (
    <>
    <div className='container d-flex flex-column justify-content-center align-items-center mt-5'>
<h3>Our Team Leaders</h3>
<p>They are very friendly and Experience peoples, You will be safe with them </p>
    </div>
    <div id='car' style={{gap: '25px'}} className='d-flex dlex-row justify-content-center align-items-center '>
<div  className='d-flex flex-column justify-content-center align-items-center'>
<img id='ex1' style={{width:'200px',height:'200px'}} src="https://network.expertisefinder.com/expert-profile-photo/karla-boluk" alt="" />
<h6 className='mt-3 fw-bolder text-align-center'>Jeniffer Mathew</h6>
</div>
<div className='d-flex flex-column justify-content-center align-items-center'>
<img id='ex1' style={{width:'200px',height:'200px'}} src="https://network.expertisefinder.com/expert-profile-photo/dimitrios-buhalis" alt="" />
<h6  className='mt-3 fw-bolder text-align-center'>Barbik J</h6>

</div>
<div  className='d-flex flex-column justify-content-center align-items-center' >
<img id='ex1' style={{width:'200px',height:'200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk-GWLAV-97kfRn1g2aH_pkM53aFBljRMDn5KCtZLPrIVl4P-2W3Be7g8Mu1Chmw03Mo&usqp=CAU" alt="" />
<h6  className='mt-3 fw-bolder text-align-center'>James Thomas</h6>
</div>
    </div>
    <div  className='container d-flex flex-column justify-content-center align-items-center mt-5'>
        <h3>Our Clients Feedback</h3>
        <div id='feedback' style={{gap:'10px'}}  className='d-flex dlex-row justify-content-center align-items-center mt-5'>
        <div id='bor'  className='d-flex flex-column justify-content-center align-items-center'>
        <img id='review' style={{width:'50px',height:'50px'}} src="https://thumbs.dreamstime.com/b/adventure-travel-tourism-people-concept-group-smiling-friends-backpacks-map-outdoors-153858643.jpg" alt="" />
            <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
           <p id='para'> That was a Wonderfull Trip !consectetur adipisicing elit. Hic, alias? Corporis beatae facilis, sunt inventore nemo dicta ipsum maiores cupiditate dolor, minima quibusdam natus sapiente deserunt, nostrum id quos saepe!</p>
        </div>
        <div id='bor'  className='d-flex flex-column justify-content-center align-items-center'>
        <img id='review' style={{width:'50px',height:'50px'}} src="https://images.saymedia-content.com/.image/t_share/MjAxNDQzNzMyNjY5NjA1NDk3/advantages-and-disadvantages-of-tourism.jpg" alt="" />
            <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
            <p id='para'> Awesome trip,I want to go one more time amet consectetur adipisicing elit. Hic, alias? Corporis beatae facilis, sunt inventore nemo dicta ipsum maiores cupiditate dolor, minima quibusdam natus sapiente deserunt, nostrum id quos saepe!</p>

        </div>
        <div id='bor'  className='d-flex flex-column justify-content-center align-items-center'>
        <img id='review' style={{width:'50px',height:'50px'}} src="https://www.shutterstock.com/image-photo/multiethnic-traveler-couple-using-local-260nw-632401589.jpg" alt="" />
            <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></span>
            <p id='para'>I loved it! The trip Guids are very friendly adipisicing elit. Hic, alias? Corporis beatae facilis, sunt inventore nemo dicta ipsum maiores cupiditate dolor, minima quibusdam natus sapiente deserunt, nostrum id quos saepe!</p>

        </div>
        <div id='bor' className='d-flex flex-column justify-content-center align-items-center'>
            <img id='review' style={{width:'50px',height:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkzZmOe60Dji85VOMCS8fNRGxDFGk6g7Tpw&s" alt="" />
            <span ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></span>
            <p id='para'> I experience a WonderFull Trip with them adipisicing elit. Hic, alias? Corporis beatae facilis, sunt inventore nemo dicta ipsum maiores cupiditate dolor, minima quibusdam natus sapiente deserunt, nostrum id quos saepe!</p>

        </div>
    </div>
    </div>
    </>
  )
}

export default Experts