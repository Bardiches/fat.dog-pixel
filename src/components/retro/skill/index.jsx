import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import emptySkillPoint from './skill-point-empty.png';
import filledSkillPoint from './skill-point-filled.png';
import './index.css';

const MAX_SKILL_LEVEL = 9;

const RetroSkill = ({
  name, level, className, style = ({}),
}) => (
  <div
    className={clsx('retro-skill-container', className)}
    style={style}
  >
    <div className="retro-skill-name">
      {name}
    </div>
    <div className="retro-skill-level">
      {`Lv.${Math.min(level, MAX_SKILL_LEVEL)}`}
    </div>
    <div className="retro-skill-point-container">
      <div className="retro-skill-points">
        {
          [...Array(MAX_SKILL_LEVEL).keys()].map((skillLevel) => (
            <img
              className="retro-skill-point"
              src={level <= skillLevel ? filledSkillPoint : emptySkillPoint}
              alt=""
            />
          ))
        }
      </div>
    </div>
  </div>
);

RetroSkill.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

RetroSkill.defaultProps = {
  name: '',
  level: 0,
  className: '',
  style: {},
};

const RetroSkillList = ({ skills = [], className, style = ({}) }) => (
  <div
    className={className}
    style={style}
  >
    {skills.map(({ name, level }) => (
      <RetroSkill
        style={{ width: '100%' }}
        name={name}
        level={level}
      />
    ))}
  </div>
);

RetroSkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape(RetroSkill.propTypes)),
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

RetroSkillList.defaultProps = {
  skills: [],
  className: '',
  style: {},
};

export { RetroSkill, RetroSkillList };
