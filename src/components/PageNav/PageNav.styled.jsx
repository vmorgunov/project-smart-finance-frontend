import styled from '@emotion/styled';

export const PageNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px;
  @media (min-width: 768px) {
    margin: 0;
    padding: 40px 0 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
