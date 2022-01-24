import styled from '@emotion/styled';

export const InputStyle = styled.input`
  padding: ${({ paddingInput }) => (paddingInput ? paddingInput : 0)};
  margin: ${({ marginInput }) => (marginInput ? marginInput : 0)};
  width: ${({ widthInput }) => (widthInput ? `${widthInput}px` : '100%')};
  height: 44px;

  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  font-style: normal;
  font-weight: bold;
  text-align: ${({ textAlignInput }) =>
    textAlignInput ? textAlignInput : 'left'};

  box-sizing: border-box;
  outline: none;

  border-top-right-radius: ${({ borderRadius }) =>
    `${borderRadius.topRight}px`};
  border-top-left-radius: ${({ borderRadius }) => `${borderRadius.topLeft}px`};
  border-bottom-right-radius: ${({ borderRadius }) =>
    `${borderRadius.bottomRight}px`};
  border-bottom-left-radius: ${({ borderRadius }) =>
    `${borderRadius.bottomLeft}px`};

  border-left: 2px solid
    ${({ borderColor }) => (borderColor ? borderColor : 'var(--bg-color)')};
  border-top: 2px solid
    ${({ borderColor }) => (borderColor ? borderColor : 'var(--bg-color)')};
  border-bottom: ${({ border, borderColor }) =>
    `${border?.bottom || border?.bottom === 0 ? border.bottom : 2}px solid ${
      borderColor ? borderColor : 'var(--bg-color)'
    }`};
  border-right: ${({ border, borderColor }) =>
    `${border?.right || border?.right === 0 ? border.right : 2}px solid ${
      borderColor ? borderColor : 'var(--bg-color)'
    }`};
  background: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--color-placeholder);
    font-weight: normal;
  }
`;
