import React from "react";
import profilephoto from '../../assets/images/profilephoto.jpg'

function About() {
    return (
      <section>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text-left'>
                <img src={profilephoto} alt="Dani Reinholz" className="rounded"/>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-6 text-left mt-4'>
              <p className="text-bold"> Info about me</p>
              </div>
            </div>
          </div>

      </section>
    );
  }
  
  export default About;