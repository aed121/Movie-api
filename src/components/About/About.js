import React from 'react';
import Daskalos from './Daskalos.jpg'

function About() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={Daskalos} alt="Eid alattar" style={{ width: '200px', borderRadius: '50%', marginBottom: '20px' }} />
      <h2>About Us</h2>
      <p>
        Hi, I'm Eid alattar, a passionate web developer with a love for creating beautiful and functional websites.
        I chose to create this site to showcase my skills and share my interests in movies, technology, and design.
      </p>
      <p>
        The content on this site is carefully curated to provide an engaging and unprecedent experience for users.
        I hope that you find it  entertaining.
      </p>
    </div>
  );
}

export default About;