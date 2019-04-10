import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ children }) => (
  <div>
    Item {children}
  </div>
);


Item.propTypes = {
  /** The content in the alert */
  children: PropTypes.node.isRequired,
};

export default Item;