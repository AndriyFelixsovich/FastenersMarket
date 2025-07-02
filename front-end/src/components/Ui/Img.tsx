import { FC } from 'react';

interface IProps {
	width: string | number;
	height: string | number;
	src: string;
	alt?: string;
}

const IMG:FC<IProps> = ({width, height, src, alt = 'image', ...props}) => {
  return (
		<img width={width} height={height} src={src} alt={alt} {...props} />
  );
}

export default IMG;
