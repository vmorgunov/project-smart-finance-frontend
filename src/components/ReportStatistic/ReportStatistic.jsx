import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

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
  Line
} from './ReportStatistic.styled';

export const ReportStatistic = ({costs, income}) => {

  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 }); 
  
   return (
     <Container>
       
       {isMobile && 
         <ContainerMobile>
         <Title>Расходы:{<SpanRedMobile>-{costs} грн</SpanRedMobile>} </Title>
             <LineMobile />
         <Title>Доходы:{<SpanMobile>+ {income} грн</SpanMobile>} </Title>
         </ContainerMobile>}
       
       {isTabletOrDesktop && 
         <ContainerDesktop>
         <Title>Расходы:{<SpanRed>-{costs} грн</SpanRed>} </Title>
            <Line />
        <Title>Доходы:{<Span>+ {income} грн</Span>} </Title>
        </ContainerDesktop> 
        }   
    </Container>   
  );
};


