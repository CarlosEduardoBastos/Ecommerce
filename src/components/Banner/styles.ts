import styled, { css } from 'styled-components';
import {Container as TextComponent} from '../TextComponent/styles'


export const Container = styled.section`
  ${({theme}) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primaryColor};
  `}
`;

export const Content = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    .swiper-slide {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background: #fff;
      background: transparent;

      div{
        margin: 30px 0;
      }

      ${TextComponent}{
        display: block;
        max-width: 500px;
        margin: 15px 0;
      }

    }
  `}
`;

export const Text = styled.section`
  ${({theme}) => css`
    margin-top: 120px;
  `}
`;
export const Image = styled.div`
  ${({theme}) => css`
    max-width: 250px;
    max-height: 500px;
    img{
      object-fit: cover;
      object-position: center;
      height: 100%;
    }
  `}
`;