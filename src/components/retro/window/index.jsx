import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './index.css';

const RetroWindow = ({
  title, hideLeft, children, className, style = ({}),
}) => (
  <div
    className={clsx('retro-window', hideLeft ? 'retro-window-left-clipped' : null, className)}
    style={style}
  >
    {title ? (<span className="retro-window-title">{title}</span>) : null}
    {children}
  </div>
);

RetroWindow.propTypes = {
  title: PropTypes.string,
  hideLeft: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

RetroWindow.defaultProps = {
  title: '',
  hideLeft: false,
  children: [],
  className: '',
  style: {},
};

export default RetroWindow;
