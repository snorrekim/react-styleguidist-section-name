import React from 'react';
import PropTypes from 'prop-types';

const ElementOne = ({ children }) => (
  <div>
    ElementOne {children}
  </div>
);


ElementOne.propTypes = {
  /** The content in the alert */
  children: PropTypes.node.isRequired,
};

export default ElementOne;