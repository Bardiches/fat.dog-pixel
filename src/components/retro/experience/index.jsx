import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ImageWithDefault from '../../image-with-default';
import './index.css';

const RetroExperience = ({
  company, title, date, logo, link, className, style = ({}),
}) => (
  <div
    className={clsx('retro-experience-container', className)}
    style={style}
  >
    <div className="retro-experience-icon-container">
      <a href={link}>
        <ImageWithDefault
          src={logo}
          className="retro-experience-icon"
          alt={`${company} logo`}
        />
      </a>
    </div>
    <div className="retro-experience-detail">
      {company}
      <br />
      &nbsp;&nbsp;
      {title}
      <br />
      &nbsp;&nbsp;
      {date}
    </div>
  </div>
);

RetroExperience.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

RetroExperience.defaultProps = {
  company: '',
  title: '',
  date: '',
  logo: '',
  link: '',
  className: '',
  style: {},
};

export default RetroExperience;
