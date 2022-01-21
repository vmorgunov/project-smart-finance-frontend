import { InputStyle } from "./Input.styled";

const Input = ({
    type,
    border,
    borderRadius,
    placeholder,
    widthInput,
    marginInput,
    paddingInput,
    textAlignInput,
    borderColor,
    value, onChange }) => {
    return (
        <InputStyle
            type={type}
            placeholder = {placeholder}
            border = {border}
            borderRadius={borderRadius}
            widthInput={widthInput}
            marginInput={marginInput}
            paddingInput={paddingInput}
            textAlignInput={textAlignInput}
            borderColor={borderColor}

            value={value}
            onChange={onChange}
        />
    );
};

export default Input;