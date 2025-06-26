import { FC } from 'react';
import Container from '@/components/Ui/Container';
import IMG from '@/components/Ui/Img';
import { useGetHomePageQuery } from '@/stores/slices/homeApiSlice';

const HomePage:FC = () => {
	const { data } = useGetHomePageQuery();
	
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