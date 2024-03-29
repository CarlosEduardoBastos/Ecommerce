import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionContainer />', () => {
  it('should mach snapshot', () => {
    const {container} = renderTheme(
    <SectionContainer>
      <h1>children</h1>
    </SectionContainer>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
