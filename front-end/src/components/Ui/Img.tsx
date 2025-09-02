import { FC } from 'react';

interface IProps {
	width: string | number;
	height: string | number;
	src: string;
}

const IMG:FC<IProps> = ({width, height, src, ...props}) => {
  return (
		<img width={width} height={height} src={src} {...props} alt="image" />
  );
}

export default IMG;
