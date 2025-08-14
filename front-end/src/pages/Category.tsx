import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@/components/Ui/Container';

const Category:FC = () => {
	const {category, subCategory, chilSubCategory} = useParams();


  return (
	  <Container>
		  <h2>Category</h2>

		  <div>category: {category}</div>
		  <div>subCategory: {subCategory} </div>
		  <div>chilSubCategory: {chilSubCategory}</div>


	  </Container>
  );
}

export default Category;
