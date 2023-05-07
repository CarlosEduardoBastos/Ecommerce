import { Banner } from '../../components/Banner';
import { Products } from '../../components/Products';
import * as Styled from './styles';

const Home = () => {
  return (
    <Styled.Container>
      <Banner />
      <Products />
    </Styled.Container>
  );
};

export default Home