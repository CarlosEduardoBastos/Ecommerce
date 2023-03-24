import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Product } from '.';
import { ProductProps } from '.';
export default {
  title: 'Product',
  component: Product,
  args: {
    name: 'Version history coach jacket',
    img: 'assets/pexels-abir-hasan-1857375-removebg-preview.png',
    price: 20,
    newProduct: "New"
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<ProductProps> = (args) => {
  return (
    <BrowserRouter>
      <div>
        <Product {...args} />
      </div>
    </BrowserRouter>
  );
};
