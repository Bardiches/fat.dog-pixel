import React from 'react';
import clsx from 'clsx';
import ImageWithDefault from '../../image-with-default';
import './index.css';

interface RetroExperienceProps {
  company?: string,
  title?: string,
  date?: string,
  logo?: string,
  link?: string,
  className?: string,
  [key: string]: any;
}

const RetroExperience = ({
  company = '',
  title = '',
  date = '',
  logo = '',
  link = '',
  className,
  ...rest
}: RetroExperienceProps) => (
  <div
    className={clsx('retro-experience-container', className)}
    {...rest}
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

export default RetroExperience;
