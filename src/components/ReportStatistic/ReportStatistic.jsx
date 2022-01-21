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

export const ReportStatistic = () => {

  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 }); 
  
   return (
     <Container>
       
       {isMobile && 
         <ContainerMobile>
         <Title>Расходы:{<SpanRedMobile>-{} грн</SpanRedMobile>} </Title>
             <LineMobile />
         <Title>Доходы:{<SpanMobile>+ {} грн</SpanMobile>} </Title>
         </ContainerMobile>}
       
       {isTabletOrDesktop && 
         <ContainerDesktop>
         <Title>Расходы:{<SpanRed>-{} грн</SpanRed>} </Title>
            <Line />
        <Title>Доходы:{<Span>+ {} грн</Span>} </Title>
        </ContainerDesktop> 
        }   
    </Container>   
  );
};


