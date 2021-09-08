import React, { useState } from 'react';
import missingImage from './missing-image.png';

interface ImageWithDefaultProps {
  src?: string;
  defaultSrc?: string;
  alt?: string;
  [key: string]: any;
}

const ImageWithDefault = ({
  src: initialSrc = '',
  defaultSrc = missingImage,
  alt = '',
  ...rest
}: ImageWithDefaultProps) => {
  const [src, setSrc] = useState(initialSrc);

  return (
    <img
      src={src}
      onError={() => setSrc(defaultSrc)}
      alt={alt}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
};

export default ImageWithDefault;
