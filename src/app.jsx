import React from 'react';

import ImageWithDefault from './components/image-with-default';
import {
  RetroContainer, RetroExperience, RetroSkillList, RetroTheme, RetroWindow,
} from './components/retro';

import data from './config.json';
import missingPortrait from './missing-portrait.png';
import './app.css';

const App = () => (
  <RetroContainer>
    <RetroTheme>
      <div className="app-section">
        <RetroWindow>
          {data.blurb}
        </RetroWindow>
        <RetroWindow
          hideLeft
          className="portrait-container"
        >
          <ImageWithDefault
            src={`${process.env.PUBLIC_URL}/portrait.png`}
            defaultSrc={missingPortrait}
            className="portrait"
            alt="Steve portrait"
          />
        </RetroWindow>
      </div>
      <div className="app-section">
        <RetroWindow title="Biography">
          {data.biography.map((biography) => (<div className="biography-paragraph">{biography}</div>))}
        </RetroWindow>
      </div>
      <div className="app-section">
        <RetroWindow
          title="P.Langs"
          className="app-section-split"
        >
          <RetroSkillList skills={
            data.skills.programmingLanguages.sort((a, b) => a.name.localeCompare(b.name))
          }
          />
          <div style={{ textAlign: 'right' }}>...and more!</div>
        </RetroWindow>
        <RetroWindow
          title="Tech"
          hideLeft
          className="app-section-split"
        >
          <RetroSkillList skills={
            data.skills.technologies.sort((a, b) => a.name.localeCompare(b.name))
          }
          />
          <div style={{ textAlign: 'right' }}>...and more!</div>
        </RetroWindow>
      </div>
      <div className="app-section">
        <RetroWindow title="Experience">
          {data.experience.map(({
            company, title, date, logo, link,
          }) => (
            <RetroExperience
              company={company}
              title={title}
              date={date}
              logo={logo}
              link={link}
            />
          ))}
        </RetroWindow>
      </div>
      <div className="app-section">
        <RetroWindow title="Links">
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {data.links.map(({
              logo, link,
            }) => (
              <a href={link}>
                <img
                  src={logo}
                  style={{ width: '3em' }}
                  alt=""
                />
              </a>
            ))}
          </div>
        </RetroWindow>
      </div>
    </RetroTheme>
  </RetroContainer>
);

export default App;
