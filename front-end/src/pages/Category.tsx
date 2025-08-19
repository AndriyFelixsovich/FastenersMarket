import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '@/components/Ui/Container';
import ProductItem from '@/components/ProductItem';


interface CategoryData {
  id: number;
  name: string;
  description?: string;
}

const Category: FC = () => {
  const { '*': slug } = useParams();
	const [data, setData] = useState<CategoryData[]>([]);

  const slugs = typeof slug === 'string' ? slug.split('/') : [];
  const lastSlug = slugs.length > 0 ? slugs[slugs.length - 1] : '';

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`https://fastenersmarket.local/api/v1/getCategory/${lastSlug}`); 
        setData(response.data);
      } catch (err: any) {
        console.log(err)
      }  
    };

    fetchCategoryData();
  }, [slug, lastSlug]);

  return (
    <Container>
      <h2>{lastSlug}</h2>
      <ProductItem />
    </Container>
  );
};

export default Category;
