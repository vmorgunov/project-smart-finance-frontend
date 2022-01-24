import { ButtonStyledMobile } from './ButtonMobile.styled';
import { useMediaQuery } from 'react-responsive';

const ButtonMobile = ({
  text,
  marginButton,
  widthButton,
  heightButton,
  borderRadius,
  backgroundColor,

  handelToggleType,
  type,
}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };
  return (
    <ButtonStyledMobile
      marginButton={marginButton}
      widthButton={widthButton}
      heightButton={heightButton}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      type={type}
      matches={matches}
      onClick={() => {
        console.log('handelToggleType');
        handelToggleType('costs');
      }}
    >
      {text}
    </ButtonStyledMobile>
  );
};

export default ButtonMobile;
