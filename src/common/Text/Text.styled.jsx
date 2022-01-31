import styled from '@emotion/styled';

export const Text = styled.span`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: 14px;
  letter-spacing: 0.02em;
  color: ${props => props.color};
`;
