import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsFulfilled } from '../../redux/transactonsForChart/chartSelectors';

import {
  List,
  Item,
  ItemValue,
  ItemTitle,
  SvgBox,
  Svg,
} from './ReportList.styled';

import { Rings } from 'react-loader-spinner';

import icons from '../../images/symbol-defs.svg';

const ReportList = ({ data, onClickGetChart }) => {
  const isFulfilled = useSelector(getIsFulfilled);
  const [isActiveIdx, setIsActiveId] = useState(0);

  const onIsActiveIdx = idx => {
    setIsActiveId(idx);
  };

  return (
    <List>
      {!isFulfilled ? (
        <Rings
          heigth="100"
          width="100"
          color="var(--acent-color)"
          ariaLabel="loading"
        />
      ) : data.length === 0 ? (
        <Item>Транзакций нет</Item>
      ) : (
        data.map((item, index) => (
          <Item
            key={index}
            onClick={() => {
              onClickGetChart(index);
              onIsActiveIdx(index);
            }}
          >
            <ItemValue>{item.sum}</ItemValue>
            <SvgBox idx={index} aidx={isActiveIdx}>
              <Svg idx={index} width="58" height="58">
                <use xlinkHref={`${icons}#${item.category}`} />
              </Svg>
            </SvgBox>
            <ItemTitle>{item.category}</ItemTitle>
          </Item>
        ))
      )}
    </List>
  );
};

export default ReportList;
