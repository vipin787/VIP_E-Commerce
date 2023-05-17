import React from 'react'
import { Link  } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsInstagram, BsYoutube} from 'react-icons/bs';
import {BiCopyright} from 'react-icons/bi'
const Footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
              <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h5 className="text-white mb-4">Contact US</h5>
          <div>
            <address className="text-white fs-6">
              H.no : 47,Kuberpur, Agra
            </address>
            <a href="tel: +91 8630352849" className="mt-3 d-block mb-1 text-white">
            +91 8630352849
            </a>
            <a href="cvipin787@gmail.com" className="mt-2 d-block mb-0 text-white">
            cvipin787@gmail.com
            </a>
            <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a href="text-white">
                <BsLinkedin className="fs-4" />
              </a>
              <a href="text-white">
                <BsInstagram className="fs-4" />
              </a>
              <a href="text-white">
                <BsGithub className="fs-4" />
              </a>
              <a href="text-white">
                <BsYoutube className="fs-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h5 className="text-white mb-4">Information</h5>
          <div className="footer-links d-flex flex-column">
            <Link className="text-white py-2 mb-1">Privacy Policy</Link>
            <Link className="text-white py-2 mb-1">Refund Policy</Link>
            <Link className="text-white py-2 mb-1">Shipping Policy</Link>
            <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
            <Link className="text-white py-2 mb-1">Blogs</Link>
          </div>
        </div>
        <div className="col-4">
          <h5 className="text-white mb-4">Account</h5>
          <div className="footer-links d-flex flex-column">
            <Link className="text-white py-2 mb-1">About us</Link>
            <Link className="text-white py-2 mb-1">Faq</Link>
            <Link className="text-white py-2 mb-1">Contact</Link>
          </div>
        </div>
        <div className="col-4">
          <h5 className="text-white mb-4">Quick Links</h5>
          <div className="footer-links d-flex flex-column">
            <Link className="text-white py-2 mb-1">Laptops</Link>
            <Link className="text-white py-2 mb-1">Headphones</Link>
            <Link className="text-white py-2 mb-1">Tablets</Link>
            <Link className="text-white py-2 mb-1">Watch</Link>
          </div>
        </div>
      </div>
    </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
            <BiCopyright />: {new Date().getFullYear()}: Powered by Vipin Chauhan
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
    
  )
}

export default Footer