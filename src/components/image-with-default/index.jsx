import React, { useState } from 'react';
import PropTypes from 'prop-types';

import missingImage from './missing-image.png';

const ImageWithDefault = ({
  src: initialSrc, defaultSrc, alt, ...rest
}) => {
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

ImageWithDefault.propTypes = {
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  alt: PropTypes.string,
};

ImageWithDefault.defaultProps = {
  src: '',
  defaultSrc: missingImage,
  alt: '',
};

export default ImageWithDefault;
