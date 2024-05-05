import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';


export default function Footer() {
  return (
    
    <footer style={{backgroundColor:"#070F2B"}} className="text-center text-white mt-5">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="//www.linkedin.com/in/alfonso-za" role="button">
            <FaLinkedinIn />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="//https://github.com/alfonzeta" role="button">
            <FaGithub />
          </a>
        </section>

        <section className="mb-4">
          <p>
            Movie data provided by TMDB API. 
          </p>
          <p>
            Do you have questions, suggestions, or feedback? I'd love to hear from you! Feel free to reach out.
          </p>
        </section>

        <section>
          <div className="row">
            <div>
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a target='_blank' href="https://developer.themoviedb.org/docs/getting-started" className="text-white">TMDB API</a>
                </li>
                <li>
                  <a target='_blank' href="https://colorhunt.co/palette/070f2b1b1a55535c919290c3" className="text-white">Palette</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © {new Date().getFullYear()} All rights reserved - MovieApiz
      </div>
    </footer>
  );
};