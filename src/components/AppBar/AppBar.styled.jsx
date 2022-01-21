import styled from '@emotion/styled';

export const Container = styled.div`
    height: 56px;
    padding: ${({ matches }) =>
        matches.isMobile ? '12px 14px 12px 20px' :
            matches.isTablet ? '10px 0 10px 26px' :
                matches.isDesktop && '10px 24px 10px 26px'};
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.a`
`;