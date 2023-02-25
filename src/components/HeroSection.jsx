import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-left'>
        <div className='heading'>
          <h1>
            Make <br /> remote work
          </h1>
        </div>

        <div className='paragraph'>
          <p>
            Get your team in sync, no matter your location. <br />
            Streamline processes, create team rituals, and <br />
            watch productivity soar.
          </p>
        </div>

        <a href='#' className='dark'>
          <button>Learn more</button>
        </a>

        <div className='logos'>
          <img src='/assets/client-databiz.svg' alt='databiz' />
          <img src='/assets/client-audiophile.svg ' alt='audiophile' />
          <img src='/assets/client-meet.svg' alt='meet' />
          <img src='/assets/client-maker.svg' alt='maker' />
        </div>
      </div>
      <div className='hero-right'>
        <img src='/assets/image-hero-desktop.png' alt='' />
      </div>
    </div>
  );
}
