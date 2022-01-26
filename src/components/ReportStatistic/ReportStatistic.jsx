import React from 'react';
import 'moment/locale/ru';

import { useMediaQuery } from 'react-responsive';

import {
  Container,
  ContainerMobile,
  ContainerDesktop,
  Title,
  SpanRedMobile,
  SpanMobile,
  Span,
  SpanRed,
  LineMobile,
  Line,
} from './ReportStatistic.styled';

export const ReportStatistic = ({ categoriesCosts, categoriesIncome }) => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <Container>
      {isMobile && (
        <ContainerMobile>
          <Title>
            Расходы:{<SpanRedMobile>-{categoriesCosts} грн</SpanRedMobile>}{' '}
          </Title>
          <LineMobile />
          <Title>
            Доходы:{<SpanMobile>+ {categoriesIncome} грн</SpanMobile>}{' '}
          </Title>
        </ContainerMobile>
      )}

      {isTabletOrDesktop && (
        <ContainerDesktop>
          <Title>Расходы:{<SpanRed>-{categoriesCosts} грн</SpanRed>} </Title>
          <Line />
          <Title>Доходы:{<Span>+ {categoriesIncome} грн</Span>} </Title>
        </ContainerDesktop>
      )}
    </Container>
  );
};
