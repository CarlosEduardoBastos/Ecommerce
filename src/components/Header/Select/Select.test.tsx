import { Select } from '.';
import { renderTheme } from '../../../styles/render-theme';

describe('<Select />', () => {
  it('should mach snapshot', () => {
    const { container } = renderTheme(<Select options={[
      { value: 'opcao1', label: 'Opção 1' },
      { value: 'opcao2', label: 'Opção 2' },
      { value: 'opcao3', label: 'Opção 3' },
    ]}/>);
    expect(container).toMatchSnapshot()
  });
});
