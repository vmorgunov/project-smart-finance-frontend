import { useMediaQuery } from 'react-responsive';

import { ContainerStyle } from './Container.styled';

const Container = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isDesctop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = {isMobile, isTablet, isDesctop}
    return (
            <ContainerStyle matches={matches}>
                {children}
            </ContainerStyle>
    );
};

export default Container;