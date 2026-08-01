import React from 'react';

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

/**
 * Renders <picture> with an auto-derived .webp source alongside the original
 * (jpg/png) fallback, so browsers fetch the smaller format when supported.
 */
export const Picture: React.FC<PictureProps> = ({ src, ...imgProps }) => {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} {...imgProps} />
    </picture>
  );
};
