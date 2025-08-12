import { FC } from 'react';
import Container from '@/components/Ui/Container';
import HomeBanner from '@/components/HomeBanner';
import FeaturedCollections from '@/components/FeaturedCollections';

const HomePage:FC = () => {

  return (
		<>
			<HomeBanner />
			<Container>
				<FeaturedCollections />
			</Container>
		</>
  );
}

export default HomePage;