import { ButtonStyledMobile } from './ButtonMobile.styled';
import { useMediaQuery } from 'react-responsive';
import { Svg } from '../ButtonCostsIncomeMobile/ButtonMobile.styled';
import allTransSVG from '../../../images/arrow-all.svg';

const ButtonMobile = ({
  text,
  marginButton,
  widthButton,
  heightButton,
  borderRadius,
  backgroundColor,

  handelToggleType,
  lableForHandelToggleType,
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
        handelToggleType(lableForHandelToggleType); //для перерисовки расход доход для мобилки
      }}
    >
      {text ? (
        text
      ) : (
        <Svg width="58" height="53">
          <use xlinkHref={`${allTransSVG}#icon-arrow_all`} />
        </Svg>
      )}
    </ButtonStyledMobile>
  );
};

export default ButtonMobile;
