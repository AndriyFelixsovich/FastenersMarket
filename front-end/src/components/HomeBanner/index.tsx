import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '@/components/Ui/Img';

const HomeBanner:FC = () => {
  return (
		<IMG width={100} height={100} src="src/assets/images/home-img.webp" loading="lazy" />
  );
}

export default HomeBanner;