import React from "react";
import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";

const CustomDataTable = React.forwardRef(
  ({ children, dataTable, ...rest }, ref) => {
    return (
      <DataTable
        // className="p-datatable-sm"
        stripedRows
        value={dataTable}
        dataKey="id"
        ref={ref}
        paginator
        rowHover
        scrollable
        scrollHeight="400px"
        resizableColumns
        columnResizeMode="expand"
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        emptyMessage="Không tìm thấy bản ghi"
        {...rest}
      >
        {/* <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column> */}
        {children}
      </DataTable>
    );
  }
);

export default CustomDataTable;
