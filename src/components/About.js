import React from 'react';
import PropTypes from 'prop-types';


function About({image = "https://via.placeholder.com/215", about}) {
  return (
    <aside>
      <img src={image} alt="blog logo"/>
      <p>{about}</p>
    </aside>


  );
}


About.propTypes = {};

About.defaultProps = {};

export default About;