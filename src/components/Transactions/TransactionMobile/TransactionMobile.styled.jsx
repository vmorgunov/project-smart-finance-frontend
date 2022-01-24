import styled from '@emotion/styled';

export const List = styled.ul``;

export const Item = styled.li`
  height: 50px;
  border-bottom: 1px solid var(--bg-color);

  padding: 10px 0;

  color: var(--text-color-3);

  display: flex;
`;

export const TransactionWrrap = styled.div`
  height: 225px;

  margin: 8px 0 53px 0;
`;

export const BtnWrap = styled.div`
  position: fixed;
  bottom: 0;

  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

export const BalanseWrrap = styled.div`
  height: 286px;
`;

export const DescrDateWrrap = styled.div`
  width: 54px;
  overflow: hidden;
`;

export const DescrWrrap = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
`;
export const DateWrrap = styled.div`
  font-weight: normal;
  font-size: 8px;
  line-height: 1.13;

  margin-top: 6px;
`;

export const CategoryWrrap = styled.div`
  font-weight: normal;
  font-size: 8px;
  line-height: 1.13;
  display: flex;
  align-items: flex-end;

  width: 102px;
  padding: 0 10px;
`;

export const SumWrrap = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ colorTextSum }) => colorTextSum};

  width: 90px;

  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ImgDelWrrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  border-radius: 50%;

  margin-left: 12px;
  cursor: pointer;

  &:hover {
    background: var(--bg-color);
  }
`;
export const ImgDel = styled.img`
  width: 18px;
  height: 18px;
`;
