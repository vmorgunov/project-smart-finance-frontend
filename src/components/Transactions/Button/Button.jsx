import { ButtonStyled } from "./Button.styled";

const Button = ({
    text,
    marginButton,
    widthButton,
    heightButton,
    borderRadius,
    backgroundColor
}) => {
    return (
        <ButtonStyled 
            marginButton={marginButton}
            widthButton={widthButton}
            heightButton={heightButton}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
        >
            {text}
        </ButtonStyled>
    );
};

export default Button;