import { FC, useState, useEffect } from 'react';
import Container from '@/components/Ui/Container';
import HomeBanner from '@/components/HomeBanner';
import FeaturedCollections from '@/components/FeaturedCollections';
import axios from 'axios';

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