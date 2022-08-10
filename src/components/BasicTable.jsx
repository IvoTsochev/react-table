// styles
import './table.css'

// recommended
import { useMemo } from 'react';

// React Table
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns'

export const BasicTable = () => {

  // data and columns are not fetched every re-render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // definine the table instance and assigning data
  const tableInstance = useTable({
    columns: columns,
    data: data
  })


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  // console.log('...getTableProps()', { ...getTableProps() });



  return (
    <table { ...getTableProps() }>
      <thead>
        {
          headerGroups.map((headerGroup) => (
            <tr { ...headerGroup.getHeaderGroupProps() }>
              {
                headerGroup.headers.map((column) => (
                  <th { ...column.getHeaderProps() }>
                    { column.render('Header') }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>


      <tbody { ...getTableBodyProps() }>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr { ...row.getRowProps() }>
                {
                  row.cells.map(cell => {
                    return <td { ...cell.getCellProps() }>
                      { cell.render('Cell') }
                    </td>
                  })
                }

              </tr>
            )
          })
        }

      </tbody>
    </table>
  )
}
