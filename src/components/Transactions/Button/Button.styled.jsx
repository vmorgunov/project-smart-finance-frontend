import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  margin: ${({ marginButton }) => (marginButton ? marginButton : '0 7.5px')};
  width: ${({ widthButton }) => `${widthButton ? widthButton : 125}px`};
  height: ${({ heightButton }) => `${heightButton ? heightButton : 44}px`};

  font-weight: 700;
  text-transform: uppercase;
  border-radius: ${({ borderRadius }) =>
    `${borderRadius ? borderRadius : 16}px`};

  border-width: ${({ borderWidth = '2px' }) => borderWidth};
  border-style: solid;
  border-color: ${({ borderColor = 'var(--bg-color)' }) => borderColor};
  transition: 0.3s ease-in-out;
  color: var(--text-color-3);
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    color: white;
    background-color: var(--acent-color)};
  }
`;
