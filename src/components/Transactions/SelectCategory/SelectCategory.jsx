import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { SelectStyles } from './SelectCategory.styled';
import { CATEGORIES } from '../../../common/options/categories';

// const CATEGORIES = [
//     { value: 'Транспорт', label: 'Транспорт', type: false},
//     { value: 'Здоровье', label: 'Здоровье', type: false },
//     { value: 'Алкоголь', label: 'Алкоголь', type: false },
//     { value: 'Развлечения', label: 'Развлечения', type: false },
//     { value: 'Всё для дома', label: 'Всё для дома', type: false },
//     { value: 'Техника', label: 'Техника', type: false },
//     { value: 'Коммуналка, связь', label: 'Коммуналка, связь', type: false },
//     { value: 'Спорт, хобби', label: 'Спорт, хобби', type: false },
//     { value: 'Образование', label: 'Образование', type: false },
//     { value: 'Прочее', label: 'Прочее', type: false },
//     { value: 'ЗП', label: 'ЗП', type: true },
//     { value: 'Доп. доход', label: 'Доп. доход', type: true },
// ]

const SelectCategory = ({ placeholder, name, selected, onChange, type }) => {
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
    />
  );
};

export default SelectCategory;
