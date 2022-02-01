import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${({ matches }) =>
    matches.isMobile
      ? '300px'
      : matches.isTablet
      ? '436px'
      : matches.isDesktop && '436px'};
  border-radius: 30px;
  padding: ${({ matches }) =>
    matches.isMobile
      ? '40px 18px 53px 17px'
      : matches.isTablet
      ? '50px 85px 53px 86px'
      : matches.isDesktop && '50px 85px 53px 86px'};
  margin: ${({ matches }) =>
    matches.isMobile
      ? '50px 0 0 0'
      : matches.isTablet
      ? '50px 0 0 0'
      : matches.isDesktop && '0 0 0 127px'};
  background-color: var(--bg-text-color);
  display: flex;
  flex-direction: column;
  box-shadow: ${({ matches }) =>
    matches.isMobile
      ? 'var(--box-shadow-mob-wrrap)'
      : matches.isTablet
      ? 'var(--box-shadow-tab-wrrap)'
      : matches.isDesktop && 'var(--box-shadow-tab-wrrap)'};
`;

export const Note = styled.p`
  font-size: ${({ matches }) =>
    matches.isMobile
      ? '10px'
      : matches.isTablet
      ? '12px'
      : matches.isDesktop && '12px'};
  line-height: ${({ matches }) =>
    matches.isMobile
      ? '1.2'
      : matches.isTablet
      ? '1.16'
      : matches.isDesktop && '1.16'};
  letter-spacing: 0.04em;
  color: var(--text-color-3);
  margin: ${({ matches }) =>
    matches.isMobile
      ? '0 0 24px 0'
      : matches.isTablet
      ? '0 0 20px 0'
      : matches.isDesktop && '0 0 20px 0'};
  &:first-of-type {
    text-align: ${({ matches }) =>
      matches.isMobile
        ? 'center'
        : matches.isTablet
        ? 'left'
        : matches.isDesktop && 'left'};
  }
  &:last-of-type {
    margin-left: ${({ matches }) =>
      matches.isMobile
        ? '12px'
        : matches.isTablet
        ? '0'
        : matches.isDesktop && '0'};
  }
`;

export const GoogleButton = styled.a`
  height: 40px;
  width: 122px;
  padding: 10px 19px 10px 20px;
  margin: 0 auto 30px;
  border: none;
  border-radius: 26px;
  background-color: var(--bg-tab);
  filter: drop-shadow(var(--box-shadow-tab-wrrap));
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const GoogleIcon = styled.img`
  margin-right: 9px;
  height: 18px;
  width: 17.58px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: ${({ matches }) =>
    matches.isMobile
      ? '10px'
      : matches.isTablet
      ? '12px'
      : matches.isDesktop && '12px'};
  line-height: ${({ matches }) =>
    matches.isMobile
      ? '1.2'
      : matches.isTablet
      ? '1.16'
      : matches.isDesktop && '1.16'};
  letter-spacing: 0.04em;
  margin-left: ${({ matches }) =>
    matches.isMobile
      ? '12px'
      : matches.isTablet
      ? '0'
      : matches.isDesktop && '0'};
  & > span {
    color: var(--accent-color-3);
  }
`;

export const FormInput = styled.input`
  width: ${({ matches }) =>
    matches.isMobile
      ? '253px'
      : matches.isTablet
      ? '265px'
      : matches.isDesktop && '265px'};
  height: 52px;
  padding: 17px 0 17px 20px;
  background-color: var(--bg-tab);
  border: none;
  border-radius: 30px;
  margin-top: 10px;
  outline: none;
  &::placeholder {
    margin-left: 4px;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    color: var(--color-placeholder);
    text-indent: 0px;
    opacity: 1;
    transition: all 0.4s ease;
  }
  &:focus::placeholder {
    opacity: 0;
    text-indent: 250px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const FormSubmitBtn = styled.button`
  height: 44px;
  width: 125px;
  padding: 12px 15px 12px 15px;
  border: none;
  border-radius: 16px;
  background-color: var(--bg-color);
  filter: drop-shadow(var(--box-shadow-tab-wrrap));
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color-3);
  transition: all 250ms ease-out;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover,
  &:focus {
    background-color: #ff751d;
    color: var(--bg-text-color);
  }
`;

export const ErrorValidation = styled.div`
  height: 12px;
  margin: 4px 0 14px 0;
  & > p {
    color: var(--accent-color-3);
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 0.04em;
  }
`;
