import styled from "@emotion/styled";

export const TransactioDetailsWrrap = styled.div`
    width: ${({ matches }) => matches.isMobile ? '257px' : matches.isTablet ? '620px' : matches.isDesctop && '760px'};
    height: 385px;

    border-radius: 20px 20px 0 0;
    border: 2px solid var(--bg-color);

    overflow: hidden;

`

export const TransactioInfoWrrap = styled.div`
    display: flex;
    justify-content: ${({ matches }) => matches.isTablet ? 'flex-start' : matches.isDesctop ? 'space-around' : 'center'};
    flex-direction: ${({ matches }) => matches.isTablet ? 'column' : matches.isDesctop ? 'row' : 'column'};
`

export const Summary = styled.div`
    width: 230px;
    height: 270px;

    margin: ${({ matches }) => matches.isTablet ? '40px 0 0 30px' : '0'};
`
