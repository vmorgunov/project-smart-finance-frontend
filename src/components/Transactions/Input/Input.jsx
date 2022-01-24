import { InputStyle } from './Input.styled';

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

  name,
  value,
  onChange,
}) => {
  return (
    <InputStyle
      type={type}
      placeholder={placeholder}
      border={border}
      borderRadius={borderRadius}
      widthInput={widthInput}
      marginInput={marginInput}
      paddingInput={paddingInput}
      textAlignInput={textAlignInput}
      borderColor={borderColor}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
