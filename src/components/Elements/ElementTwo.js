import React from 'react';
import PropTypes from 'prop-types';

const ElementTwo = ({ children }) => (
  <div>
    ElementTwo {children}
  </div>
);


ElementTwo.propTypes = {
  /** The content in the alert */
  children: PropTypes.node.isRequired,
};

export default ElementTwo;