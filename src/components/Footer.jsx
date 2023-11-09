import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5'>
        <div className="footer d-flex justify-content-evenly align-items-center w-100">
            <div className="website" style={{width:'400px'}}>
            <h4><i class="fa-solid fa-video fa-beat text-warning me-4"></i>{' '}
        Video Player</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora, reprehenderit harum voluptate quas? Iste, iusto ea. Nihil, quos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-4'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 className='mb-4'>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
        </div>
        <div className="contact">
          <h4 className='mb-3'>Contact Us</h4>
          <div className='d-flex mb-4'>
            <input type="text" className='form-control' placeholder='Enter Your Email Id'/>
            <button className='btn btn-warning text-white ms-2'>Subscribe</button>
          </div>
          <div className='icons d-flex justify-content-evenly'>
          <Link to={'https://www.instagram.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://twitter.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'https://www.facebook.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

          </div>
        </div>
        </div>
        <p>Copyright © 2023 Media Player. Built With React</p>
    </div>
  )
}

export default Footer