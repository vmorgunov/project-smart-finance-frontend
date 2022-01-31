import report from 'images/report.svg';
import { BalanceNavLink, ImgReport } from './GoToReportsButton.styled';

export const GoToReportsButton = () => {
  return (
    <BalanceNavLink to="/report">
      Перейти к отчетам
      <ImgReport src={report} alt="Отчеты" />
    </BalanceNavLink>
  );
};
