import React from 'react';
import clsx from 'clsx';
import './index.css';

interface RetroThemeProps {
  className?: string;
  [key: string]: any;
}

const RetroTheme = ({
  className,
  ...rest
}: RetroThemeProps) => (
  <div className={clsx('retro-theme', className)} {...rest} />
);

export default RetroTheme;
