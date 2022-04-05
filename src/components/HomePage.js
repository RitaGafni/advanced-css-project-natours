import React from 'react';
import About from './About';
import Features from './Features';
import '../HomePage.css';
import logoWhite from '../img/logo-white.png';
import Tours from './Tours';
import Stories from './Stories';
import Booking from './Booking';

export default function HomePage() {
  return (
    <div>
      <header className='header'>
        <div className='header__logo-box'>
          <img src={logoWhite} alt='logo' className='header__logo' />
        </div>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>outdoors</span>
            <span className='heading-primary--sub'>is where life happens</span>
          </h1>
          <a href='#' className='btn btn--white btn--animated'>
            Doscover Our Tours
          </a>
        </div>
      </header>

      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>

      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>Col 1 of 2</div>
          <div className='col-1-of-2'>Col 1 of 2</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-2-of-3'>Col 2 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
        </div>

        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-2-of-4'>Col 2 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-3-of-4'>Col 3 of 4</div>
        </div>
      </section> */}
    </div>
  );
}
