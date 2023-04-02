import { Meta, Story } from '@storybook/react/types-6-0';
import { Select } from '.';
import { SelectProps } from '.';
export default {
  title: 'Select',
  component: Select,
  args: {
    options: [
      {
        label: 'label',
      },
      {
        value: 'test',
      }
    ],
  },
  argTypes: {
    children: { type: 'string' },
  },
}as Meta;

export const Template:Story<SelectProps> = (args) => {
  return (
    <div>
      <Select {...args} />
    </div>
  );
};
