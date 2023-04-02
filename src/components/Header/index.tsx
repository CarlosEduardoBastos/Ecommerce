// import { SetStateAction, useState } from 'react';
import { useState } from 'react';
import { NavLinkComponent } from '../NavLinkComponent';
import { SectionContainer } from '../SectionContainer';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';
import { Select } from './Select';
import * as Styled from './styles';

export const Header = () => {
  const [inputSearch, setInputSearch] = useState(false)

  const handleClick = () => {
    setInputSearch(!inputSearch)
  }

  return (
    <Styled.Container>
      <SectionContainer>
        {inputSearch && <SearchInput />}
        <Styled.Header>
            <Styled.Nav>
            <NavLinkComponent to="/shop" size='small' hasBorder={true}>shop</NavLinkComponent>
            <NavLinkComponent to="/about" size='small' hasBorder={true}>about</NavLinkComponent>
            <SearchButton handleClick={handleClick}/>
          </Styled.Nav>
          <Styled.Logo>
            <NavLinkComponent to='/' size='big'>E-commerce</NavLinkComponent>
          </Styled.Logo>
          <Styled.Actions>
            <Select options={[
              {value: 'canada', label: 'canada'},
              {value: 'japan', label: 'japan'},
              {value: 'UNITED KINGDOM', label: 'UNITED KINGDOM'},
              {value: "I'M JUST BROWSING", label: "I'M JUST BROWSING"},
            ]}/>
          </Styled.Actions>
        </Styled.Header>
       
      </SectionContainer>
    </Styled.Container>
    
  );
};
