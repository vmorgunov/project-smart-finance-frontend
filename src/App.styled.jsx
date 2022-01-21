import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: ${({ matches }) =>
        matches.isMobile ? '320px' :
            matches.isTablet ? '768px' :
                matches.isDesktop && '1280px'};
    margin: 0 auto;
`;