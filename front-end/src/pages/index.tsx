import { FC } from 'react';
import { useGetHomePageQuery } from '@/stores/slices/homeApiSlice';
import Container from '@/components/Ui/Container';
import HomeBanner from '@/components/HomeBanner';
import FeaturedCollections from '@/components/FeaturedCollections';

const HomePage:FC = () => {
	const { data } = useGetHomePageQuery();
	
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