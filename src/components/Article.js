import React from 'react';
import PropTypes from 'prop-types';


function Article({title, date = "January 1, 1970",preview}) {
  return(
    <Article>
       <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </Article>

  )
}


Article.propTypes = {};

Article.defaultProps = {};

export default Article;