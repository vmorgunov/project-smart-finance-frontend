import { useTable } from 'react-table';
import { useMediaQuery } from 'react-responsive';
import { v4 } from 'uuid';
import SimpleBar from 'simplebar-react';
import "simplebar/src/simplebar.css";

import { TableHeader, TableBody, Thead, Tbody, Tr, Th, Td, ImgDel, ImgDelWrrap } from './TransactionTable.styled'
import delSrc from '../../../images/delete.svg'
import { useMemo } from 'react'

export const COLUMS = [
    { Header: 'Дата', accessor: 'date', param: { width: '104px', align: 'left'} },
    { Header: 'Описание', accessor: 'description', param: { width: '190px', align: 'left' } },
    { Header: 'Категория', accessor: 'category', param: { width: '150px', align: 'center' }  },
    { Header: 'Сумма', accessor: 'sum', param: { width: '120px', align: 'right' }  },
    { Header: '', accessor: 'icon', param: { width: '124px', align: 'center' } }
    ]
export const DATA = [
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
    { date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc  },
]

const TransactionTable = ({ type }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isDesctop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isMobile, isTablet, isDesctop }
    const columns = useMemo(() => COLUMS, [])
    const data = useMemo(() => DATA, [])
    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;
    return (
        <>
        <TableHeader {...getTableProps()} matches={matches}>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr key={v4()} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th key={v4()} {...column.getHeaderProps()}  param={column.param}>
                                {column.render('Header')}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
        </TableHeader>
        <SimpleBar style={{ maxHeight: 345 }}>
            <TableBody  matches={matches}>
                    <Tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <Tr key={v4()} {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <Td key={v4()} {...cell.getCellProps}  param={cell.column.param}>
                                            {cell.column.id === 'icon' ?
                                                <ImgDelWrrap>
                                                    <ImgDel src={delSrc} alt='Удалить'></ImgDel>
                                                </ImgDelWrrap>    
                                                :
                                                cell.render('Cell')
                                            }
                                        </Td>
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
            </TableBody>
        </SimpleBar>
        </>
    )
}
export default TransactionTable