import { ButtonStyled } from './Button.styled';
import { useMediaQuery } from 'react-responsive';

const Button = ({
  text,
  marginButton,
  widthButton,
  heightButton,
  borderRadius,
  backgroundColor,

  onClick,
  type,
}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };
  return (
    <ButtonStyled
      marginButton={marginButton}
      widthButton={widthButton}
      heightButton={heightButton}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      type={type}
      onClick={onClick} //
      matches={matches}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
