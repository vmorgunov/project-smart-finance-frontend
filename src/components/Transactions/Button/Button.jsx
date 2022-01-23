import { ButtonStyled } from "./Button.styled";

const Button = ({
    text,
    marginButton,
    widthButton,
    heightButton,
    borderRadius,
    backgroundColor,

    type
}) => {
    return (
        <ButtonStyled 
            marginButton={marginButton}
            widthButton={widthButton}
            heightButton={heightButton}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}

            type={type}
        >
            {text}
        </ButtonStyled>
    );
};

export default Button;