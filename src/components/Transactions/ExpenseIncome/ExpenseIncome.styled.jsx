import { css } from '@emotion/css';

export const tabs = css``;

export const tab = css`
  @media screen and (max-width: 767px) {
    min-width: 107px;

    border-top-right-radius: 0px;
    border-top-left-radius: 0px;

    padding: 12px 0;
  }

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

  &:not(:last-child) {
    margin-right: 1px;
  }
`;

export const tabSelected = css`
  @media screen and (max-width: 767px) {
    background: var(--acent-color);
    color: var(--bg-text-color);
  }
  background: var(--bg-tab-selected);
  color: var(--acent-color);
`;

export const tabList = css`
  display: flex;

  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0px;
    z-index: 1;
  }
`;

export const tabPanel = css`
  @media screen and (max-width: 767px) {
    background-color: transparent;
    box-shadow: 0px 0px 0px;
    padding: 0px;
    min-height: auto;
  }
  background-color: var(--bg-text-color);
  box-shadow: var(--box-shadow-tab-wrrap);
  border-radius: 0px 30px 30px 30px;
  padding: 30px 20px 60px 20px;

  min-height: 579px;
`;
