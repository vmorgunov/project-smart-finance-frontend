import { useMediaQuery } from 'react-responsive';
import { BackToMainButton, Balance, GoToReportsButton, MonthPicker } from '..';
import { PageNavContainer } from './PageNav.styled';

export const PageNav = ({ typeView, setMonth, setYear, month, year }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <PageNavContainer>
      {typeView === 'report' && <BackToMainButton />}
      {typeView === 'main' && isMobile && <GoToReportsButton />}
      {typeView === 'report' && isMobile && (
        <MonthPicker
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
        />
      )}
      <Balance typeView={typeView} />
      {typeView === 'main' && isTabletOrDesktop && <GoToReportsButton />}
      {typeView === 'report' && isTabletOrDesktop && (
        <MonthPicker
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
        />
      )}
    </PageNavContainer>
  );
};
