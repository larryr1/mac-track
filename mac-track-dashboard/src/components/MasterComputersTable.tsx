import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useState } from 'react';


export const MasterComputersTable = () => {

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { computerName: "Computer Names", model: "Model Y", price: 64950, electric: true },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "computerName" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);

  return (
    <div>
      <h1>Master Computers Table</h1>

      <div className="ag-theme-quartz" style={{ height: "75vh"}}>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
        />
      </div>
    </div>
  )
}
