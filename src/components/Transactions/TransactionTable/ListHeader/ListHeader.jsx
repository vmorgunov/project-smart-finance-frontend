import { v4 } from 'uuid';

import { Item } from './ListHeader.styled';
import { List } from './ListHeader.styled';
import { COLUMNS, PARAMS } from '../params';
import { useMediaQuery } from 'react-responsive';

const ListHeader = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };
  return (
    <List matches={matches}>
      {COLUMNS.map(column => (
        <Item
          key={v4()}
          widthColumn={PARAMS[column.accessor].width}
          alignColumn={PARAMS[column.accessor].align}
        >
          {column.Header}
        </Item>
      ))}
    </List>
  );
};

export default ListHeader;
