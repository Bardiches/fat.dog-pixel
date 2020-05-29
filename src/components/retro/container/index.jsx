import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const RetroContainer = ({ children }) => (
  <div className="retro-container">
    {children}
  </div>
);

RetroContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

RetroContainer.defaultProps = {
  children: [],
};

export default RetroContainer;
