import React from 'react'
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';


export default function Footer() {
  return (
    
    <footer style={{backgroundColor:"#070F2B"}} className="text-center text-white mt-5">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaFacebookF />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaTwitter />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaGoogle />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaInstagram />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaLinkedinIn />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaGithub />
          </a>
        </section>

        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter!</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" placeholder='your e-mail' />
                  <label className="form-label" htmlFor="form5Example21">
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © {new Date().getFullYear()} All rights reserved - 
        <a className="text-white" href="https://www.google.com/">
          - movieAPI
        </a>
      </div>
    </footer>
  );
};