export const COLUMNS = [
  {
    Header: 'Дата',
    accessor: 'date',
  },
  {
    Header: 'Описание',
    accessor: 'description',
  },
  {
    Header: 'Категория',
    accessor: 'category',
  },
  {
    Header: 'Сумма',
    accessor: 'sum',
  },
  { Header: '', accessor: 'icon' },
];

export const PARAMS = {
  date: { width: '104px', align: 'flex-start' },
  description: { width: '204px', align: 'flex-start' },
  category: { width: '192px', align: 'center' },
  sum: { width: '124px', align: 'flex-end' },
  icon: { width: '136px', align: 'center' },
};
