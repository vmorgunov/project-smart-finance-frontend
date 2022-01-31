import { Text } from './Text.styled';

export const CommonText = ({
  children,
  fontWeight = 500,
  color = 'var(--text-color)',
  fontSize = '12px',
}) => {
  return (
    <Text fontWeight={fontWeight} color={color} fontSize={fontSize}>
      {children}
    </Text>
  );
};
