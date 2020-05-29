import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const RetroTheme = ({ children }) => (
  <div className="retro-theme">
    {children}
  </div>
);

RetroTheme.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

RetroTheme.defaultProps = {
  children: '',
};

export default RetroTheme;
