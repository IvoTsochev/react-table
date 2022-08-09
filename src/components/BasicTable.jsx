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

  console.log('headerGroups', headerGroups);


  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>


      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
