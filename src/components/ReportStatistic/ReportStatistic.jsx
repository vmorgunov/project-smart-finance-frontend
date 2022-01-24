import React, {useEffect, useState} from 'react';
import 'moment/locale/ru';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
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
import { getTotalSum } from '../../redux/transactonsForChart/transactionOperations';
import { getUserToken } from '../../redux/selectors/tokenSelector';

export const ReportStatistic = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 }); 
  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(moment(new Date()).format('MM'));
  const [year, setYear] = useState(moment(new Date()).format('YYYY'));

  const [type, setType] = useState('costs');

  useEffect(() => {
    if (!!userToken) {
      const totalData = dispatch(
        getTotalSum({ year, month, type, userToken }),
      )
     setData()
    }
  }, [year, dispatch, month, userToken, type]);
  

   return (
     <Container>
       
       {isMobile && 
         <ContainerMobile>
         <Title>Расходы:{<SpanRedMobile>-{setData} грн</SpanRedMobile>} </Title>
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



