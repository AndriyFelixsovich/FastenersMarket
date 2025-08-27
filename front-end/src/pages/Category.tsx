import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '@/components/Ui/Container';
import ProductItem from '@/components/ProductItem';

interface CategoryData {
  id: number;
  name: string;
  description: string;
  image_path: string;
  price: number;
  quantity: number;
  origin_number: number;
}

const Category:FC = () => {
  const { '*': slug } = useParams();
	const [data, setData] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(false);
  const slugs = typeof slug === 'string' ? slug.split('/') : [];
  const lastSlug = slugs.length > 0 ? slugs[slugs.length - 1] : '';

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fastenersmarket.local/api/v1/getCategory/${lastSlug}`); 
        setData(response.data.products);
      } catch (err: unknown) {
        console.log(err)
      }  finally {
        setLoading(false)
      } 
    };

    fetchCategoryData();
  }, [slug, lastSlug]);

  return (
    <Container>
      {
        loading 
          ? <div style={{ margin: '2rem 0', fontWeight: '500', fontSize: '1.2rem', color: '#0270ac' }}>Loading...</div>
          : data.map((product, index) => <ProductItem key={product.id + index} product={product} />)
      }
    </Container>
  );
};

export default Category;
