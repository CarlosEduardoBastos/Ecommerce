import { Link } from 'react-router-dom';
import {Container as Heading} from '../../Heading/styles'
import styled, { css } from 'styled-components';

export const Container = styled(Link)`
  height: 463px;
  width: 310px;
  text-decoration: none;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const ImageContainer = styled.div`
  border-radius: 35px;
  background-color: #dadad8;
  height: 412px;
`
export const Content = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ContentText = styled.div`
  ${Heading}{
    font-weight: 700;
  }
`;

export const Price = styled.span`
  ${({theme}) => css`
    text-decoration: none;
    color: ${theme.colors.darkColor};
    font-size: ${theme.fonts.sizes.xxsmall};
    font-weight: 400;
  `}
`;

export const NewProduct = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.secondaryColor};
    font-weight: 400;
    margin-bottom: 4px;
    font-size: ${theme.fonts.sizes.xxsmall};
  `}
`