import styled from "@emotion/styled";

export const ContainerStyle = styled.div`
    position: relative;
    margin: 0 auto;

    max-width: ${({matches}) => matches.isMobile ? '320px' : matches.isTablet ? '768px' : matches.isDesctop && '1280px'};
    padding: ${({matches}) => matches.isMobile ? '0 19px' : matches.isTablet ? '0 51px' : matches.isDesctop && '0 110px'};
    padding-bottom: ${({matches}) => matches.isMobile ? '0' : matches.isTablet ? '57px' : matches.isDesctop && '83px'};

`
