import React from 'react';
import './index.css';

interface RetroContainerProps {
  [key: string]: any;
}

const RetroContainer = ({ ...rest }: RetroContainerProps) => (
  <div className="retro-container" {...rest} />
);

export default RetroContainer;
