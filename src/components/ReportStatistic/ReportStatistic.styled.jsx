import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 0 40px;
  height: 50px;
  border-radius: 30px;
  box-shadow: var(--box-shadow-tab-wrrap);
  background-color: var(--bg-text-color);
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
  box-shadow: var(--box-shadow-mob-wrrap);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--bg-text-color);
`;

export const Title = styled.p`
  margin-right: 15px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
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
  border-left: 1px solid var(--color-placeholder);
`;

export const LineMobile = styled.div`
  margin-right: 10px;
  height: 85px;
  border-left: 1px solid var(--color-placeholder);
`;
