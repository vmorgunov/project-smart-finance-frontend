import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { SelectStyles } from './SelectCategory.styled';
import { CATEGORIES } from '../../../common/options/categories';
import { useSelector } from 'react-redux';

const SelectCategory = ({ placeholder, name, selected, onChange }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  const transactionType = useSelector(state => state.transactions.type);

  const categories = CATEGORIES.filter(
    category => category.type === transactionType,
  );

  return (
    <Select
      controlShouldRenderValue={selected ? true : false} //
      styles={SelectStyles(matches)}
      options={categories}
      placeholder={placeholder}
      name={name}
      selected={selected}
      onChange={onChange}
    />
  );
};

export default SelectCategory;
