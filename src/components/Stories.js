import React from 'react';
import nature8 from '../img/nat-8.jpg';
import nature9 from '../img/nat-9.jpg';
import video_mp4 from '../img/video.mp4';
import video_webm from '../img/video.webm';

export default function Stories() {
  return (
    <div>
      <section className='section-stories'>
        <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={video_mp4} type='video/mp4' />
            <source src={video_webm} type='video/webm' />
            Your browser is not supported!
          </video>
        </div>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>We make people happy</h2>
        </div>
        <div className='row'>
          <div className='story'>
            <figure className='story__shape'>
              <img
                src={nature8}
                alt='person on a tour'
                className='story__image'
              />
              <figcaption className='story__caption'>Mary Smith</figcaption>
            </figure>
            <div className='story__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                I had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='story'>
            <figure className='story__shape'>
              <img
                src={nature9}
                alt='person on a tour'
                className='story__image'
              />
              <figcaption className='story__caption'>Jack Wilson</figcaption>
            </figure>
            <div className='story__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                wow! my life is completely different now
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. quis nostrud
                exercitation ullamco laboris ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className='u-center-text u-margin-bottom-huge'>
          <a className=' btn-text ' href='#'>
            Read all stories &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
