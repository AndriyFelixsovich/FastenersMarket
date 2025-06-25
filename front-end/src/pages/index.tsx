import { FC } from 'react';
import Container from '@/components/Ui/Container';
import IMG from '@/components/Ui/Img';

const HomePage:FC = () => {
  return (
		<>
			<IMG width={100} height={100} src="src/assets/images/home-img.webp" loading="lazy" />
			<Container>
				Home
			</Container>
		</>
  );
}

export default HomePage;