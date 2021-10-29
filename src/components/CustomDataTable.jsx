import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CustomDataTable = React.forwardRef(
  ({ children, dataTable, ...rest }, ref) => {
    return (
      <DataTable
        className="p-datatable-sm"
        stripedRows
        value={dataTable}
        ref={ref}
        paginator
        rowHover
        scrollable
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        emptyMessage="Không tìm thấy bản ghi"
        {...rest}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        {children}
      </DataTable>
    );
  }
);

export default CustomDataTable;
