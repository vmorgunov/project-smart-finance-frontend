import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { SelectStyles } from './SelectCategory.styled';
import { CATEGORIES } from '../../../common/options/categories';

const SelectCategory = ({
  placeholder,
  name,
  selected,
  onChange,
  type,
  onBlur,
  tabindex,
}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };
  const categories = CATEGORIES.filter(category => category.type === type);
  return (
    <Select
      styles={SelectStyles(matches)}
      options={categories}
      placeholder={placeholder}
      name={name}
      selected={selected}
      onChange={onChange}
      onBlur={onBlur}
      tabindex={tabindex}
    />
  );
};

export default SelectCategory;
