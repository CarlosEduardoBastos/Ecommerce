import styled, { css } from 'styled-components';

export const Container = styled.select`
  ${({theme}) => css`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: ${theme.colors.darkColor}; 
    border: 2px solid #000;
    border-radius: 30px;
    padding: 10px 20px 9px;
    transition: .3s linear,color .3s linear;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('../assets/chevron-down-regular-24.png');
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 20px;
  `}
`;
