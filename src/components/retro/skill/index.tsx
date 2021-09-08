import React from 'react';
import clsx from 'clsx';
import emptySkillPoint from './skill-point-empty.png';
import filledSkillPoint from './skill-point-filled.png';
import './index.css';

const MAX_SKILL_LEVEL = 9;

interface RetroSkillProps {
  name?: string;
  level?: number;
  className?: string;
  [key: string]: any;
}

const RetroSkill = ({
  name = '',
  level = 0,
  className,
  ...rest
}: RetroSkillProps) => (
  <div
    className={clsx('retro-skill-container', className)}
    {...rest}
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

interface RetroSkillListProps {
  skills: RetroSkillProps[];
  [key: string]: any;
}

const RetroSkillList = ({
  skills = [],
  ...rest
}: RetroSkillListProps) => (
  <div {...rest}>
    {
      skills.map((skillProps) => <RetroSkill {...skillProps} />)
    }
  </div>
);

export { RetroSkill, RetroSkillList };
