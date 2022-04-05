import React from 'react';
import nature1 from '../img/nat-1-large.jpg';
import nature2 from '../img/nat-2-large.jpg';
import nature3 from '../img/nat-3-large.jpg';

export default function About() {
  return (
    <section className='section-about'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            You're going to fall in love with nature
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            maximus risus eu finibus. Fusce quis eros ut augue egestas euismod
            vel eget orci. Proin maximus feugiat ullamcorper. Etiam vehicula
            ipsum purus. Cras a pulvinar odio, non aliquam nunc.
          </p>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Live adventures like you never lived before{' '}
          </h3>
          <p className='paragraph'>
            Cras a pulvinar odio, non aliquam nunc. Pellentesque accumsan, elit
            nec porta egestas, augue ipsum interdum augue, sed tincidunt ex arcu
            ac urna. Curabitur pretium lacus velit.
          </p>
          <a href='#' className='btn-text'>
            Learn more &rarr;
          </a>
        </div>
        <div className='col-1-of-2'>
          <div className='composition'>
            <img
              src={nature1}
              alt='nature1'
              className='composition__photo composition__photo--p1'
            />
            <img
              src={nature2}
              alt='nature2'
              className='composition__photo composition__photo--p2'
            />
            <img
              src={nature3}
              alt='nature3'
              className='composition__photo composition__photo--p3'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
