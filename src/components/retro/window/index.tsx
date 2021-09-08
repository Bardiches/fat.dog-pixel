import React, { ReactNode } from 'react';
import clsx from 'clsx';
import './index.css';

interface RetroWindowProps {
  title?: string;
  hideLeft?: boolean;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

const RetroWindow = ({
  title = '',
  hideLeft = false,
  className,
  children,
  ...rest
}: RetroWindowProps) => (
  <div
    className={clsx('retro-window', hideLeft ? 'retro-window-left-clipped' : null, className)}
    {...rest}
  >
    {title ? (<span className="retro-window-title">{title}</span>) : null}
    {children}
  </div>
);

export default RetroWindow;
