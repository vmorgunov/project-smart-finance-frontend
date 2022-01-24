import styled from '@emotion/styled';

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 75px;
  @media (max-width: 772px) {
    align-items: center;
  }
`;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ReportComponent = styled.div`
  display: block;
  border: 1px solid rgb(15, 15, 15);
  border-radius: 5px;
`;

export const ReportCostsOrIncomeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border: 1px solid rgb(15, 15, 15);
  border-radius: 5px;
`;

export const ReportGraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(15, 15, 15);
  border-radius: 5px;
`;
