import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 30px 0 40px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
`;

export const ContainerDesktop = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerMobile = styled.div`
  display: flex;
  margin-top: 30px;
  height: 85px;
  min-width: 282px;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #ffffff;
`;

export const Title = styled.p`
  margin-right: 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;

  color: var(--text-color-3);
`;

export const Span = styled.span`
  display: block;
  margin-top: 5px;
  color: var(--accent-color-4);
  display: inline;
  margin-left: 15px;
  margin-top: 0;
`;
export const SpanMobile = styled.span`
  display: block;
  margin-top: 5px;
  color: var(--accent-color-4);
  display: block;
`;
export const SpanRed = styled.span`
  display: block;
  margin-top: 5px;
  display: inline;
  margin-left: 15px;
  margin-top: 0;
  color: var(--accent-color-3);
`;

export const SpanRedMobile = styled.span`
  display: block;
  margin-top: 5px;
  margin-left: 15px;
  color: var(--accent-color-3);
`;

export const Line = styled.div`
  margin-right: 10px;
  height: 50px;
  border-left: 1px solid #e0e5eb;
`;

export const LineMobile = styled.div`
  margin-right: 10px;
  height: 85px;
  border-left: 1px solid #e0e5eb;
`;
