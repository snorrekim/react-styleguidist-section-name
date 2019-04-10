import React from 'react';
import PropTypes from 'prop-types';

const Thing = ({ children }) => (
  <div>
    Thing {children}
  </div>
);


Thing.propTypes = {
  /** The content in the alert */
  children: PropTypes.node.isRequired,
};

export default Thing;