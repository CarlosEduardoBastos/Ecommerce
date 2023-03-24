import { Heading } from '../../Heading';
import * as Styled from './styles';

export interface ProductProps {
  to: any,
  img: string,
  name: string,
  price: number,
  newProduct: boolean
};

export const Product = ({to, img, name, price, newProduct}:ProductProps) => {
  return (
    <Styled.Container to={to}>
      <Styled.ImageContainer>
        <Styled.Image src={img}/>
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.ContentText>
          <Styled.NewProduct>{newProduct}</Styled.NewProduct>
          <Heading as='h4' size='medium'>{name}</Heading>
        </Styled.ContentText>
        <Styled.Price>${price}</Styled.Price>
      </Styled.Content>
    </Styled.Container>
  );
};
