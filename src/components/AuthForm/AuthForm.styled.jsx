import styled from '@emotion/styled';

export const Container = styled.div`
    width: ${({ matches }) =>
        matches.isMobile ? '300px' :
            matches.isTablet ? '436px' :
                matches.isDesktop && '436px'};
    border-radius: 30px;
    padding: ${({ matches }) =>
        matches.isMobile ? '40px 18px 53px 17px' :
            matches.isTablet ? '50px 85px 53px 86px' :
                matches.isDesktop && '50px 85px 53px 86px'};
    margin: ${({ matches }) =>
        matches.isMobile ? '50px 0 0 0' :
            matches.isTablet ? '50px 0 0 0' :
                matches.isDesktop && '0 0 0 127px'};
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: ${({ matches }) =>
        matches.isMobile ? '5px 10px 20px rgba(170, 178, 197, 0.4)' :
            matches.isTablet ? '0px 10px 60px rgba(170, 178, 197, 0.2)' :
                matches.isDesktop && '0px 10px 60px rgba(170, 178, 197, 0.2)'};
`;

export const Note = styled.p`
    font-size: ${({ matches }) =>
        matches.isMobile ? '10px' :
            matches.isTablet ? '12px' :
                matches.isDesktop && '12px'};
    line-height: ${({ matches }) =>
        matches.isMobile ? '1.2' :
            matches.isTablet ? '1.16' :
                matches.isDesktop && '1.16'};
    letter-spacing: 0.04em;
    color: #52555F;
    margin: ${({ matches }) =>
        matches.isMobile ? '0 0 24px 0' :
            matches.isTablet ? '0 0 20px 0' :
                matches.isDesktop && '0 0 20px 0'};
    &:first-of-type{
        text-align: ${({ matches }) =>
        matches.isMobile ? 'center' :
            matches.isTablet ? 'left' :
                matches.isDesktop && 'left'};
    }
    &:last-of-type{
        margin-left: ${({ matches }) =>
        matches.isMobile ? '12px' :
            matches.isTablet ? '0' :
                matches.isDesktop && '0'}
    }
`;

export const GoogleButton = styled.a`
    height: 40px;
    width: 122px;
    padding: 10px 19px 10px 20px;
    margin: 0 auto 30px;
    border: none;
    border-radius: 26px;
    background-color: #F6F7FB;
    filter: drop-shadow( 1px 3px 3px rgba(170, 178, 197, 0.2));
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #000;
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
        matches.isMobile ? '10px' :
            matches.isTablet ? '12px' :
                matches.isDesktop && '12px'};
    line-height: ${({ matches }) =>
        matches.isMobile ? '1.2' :
            matches.isTablet ? '1.16' :
                matches.isDesktop && '1.16'};
    letter-spacing: 0.04em;
    margin-left: ${({ matches }) =>
        matches.isMobile ? '12px' :
            matches.isTablet ? '0' :
                matches.isDesktop && '0'};
    & > span {
        color: rgba(235, 87, 87, 1);
    }
`;

export const FormInput = styled.input`
    width: ${({ matches }) =>
        matches.isMobile ? '253px' :
            matches.isTablet ? '265px' :
                matches.isDesktop && '265px'};
    height: 52px;
    padding: 17px 0 17px 20px;
    background-color: #F6F7FB;
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
      color: rgba(166, 171, 185, 1);
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
    background-color: #F6F7FB;
    filter: drop-shadow( 1px 3px 3px rgba(170, 178, 197, 0.2));
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #52555F;
    transition: all 250ms ease-out;
    &:not(:last-child) {
        margin-right: 15px;
    }
    &:hover,
    &:focus {
        background-color: #FF751D;
        color: #FFFFFF;
    }
`;

export const ErrorValidation = styled.div`
    height: 12px;
    margin: 4px 0 14px 0;
    & > p{
        color: rgba(235, 87, 87, 1);
        font-size: 10px;
        line-height: 1.2;
        letter-spacing: 0.04em;
    }
`;