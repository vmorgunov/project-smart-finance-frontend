import { css } from '@emotion/css';

export const tab = css`
  text-align: center;
  min-width: 159px;

  padding: 10px 0;

  cursor: pointer;

  color: var(--text-color);
  background: var(--bg-tab);

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;

  &:first-child {
    margin-right: 2px;
  }
`;
export const tabSelected = css`
  background: var(--bg-tab-selected);
  color: var(--acent-color);
`;

export const tabList = css`
  display: flex;
`;
export const tabPanel = css`
  background-color: var(--bg-text-color);
  box-shadow: var(--box-shadow-tab-wrrap);
  border-radius: 0px 30px 30px 30px;
  padding: 30px 20px 60px 20px;

  min-height: 579px;
`;
