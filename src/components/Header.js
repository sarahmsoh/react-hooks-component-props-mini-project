import React from 'react';
import PropTypes from 'prop-types';


function Header ({name}) {

  return(
  <div>
    <h1>{name}</h1>
  </div>

);
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;