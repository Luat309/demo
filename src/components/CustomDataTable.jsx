import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";

const CustomDataTable = React.forwardRef(
  ({ children, dataTable = [], showSearch = false, ...rest }, ref) => {
    const [globalFilter, setGlobalFilter] = useState(null);
    const [loading, setLoading] = useState(true);

    const header = (
      <div className="table-header">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Tìm kiếm nhanh..."
          />
        </span>
      </div>
    );

    const genIndex = (_data, props) => {
      return props.rowIndex + 1;
    };

    useEffect(() => {
      if (dataTable.length > 0) {
        setLoading(false);
      }
    }, [dataTable]);

    return (
      <DataTable
        className="p-datatable-sm"
        header={showSearch && header}
        stripedRows
        value={dataTable}
        dataKey="id"
        ref={ref}
        globalFilter={globalFilter}
        paginator
        rowHover
        scrollable
        scrollHeight="350px"
        resizableColumns
        columnResizeMode="expand"
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        emptyMessage="Không tìm thấy bản ghi"
        loading={loading}
        {...rest}
      >
        <Column
          header="STT"
          body={genIndex}
          // selectionMode="multiple"
          style={{ width: "50px", textAlign: "center" }}
        ></Column>
        {children}
      </DataTable>
    );
  }
);

export default CustomDataTable;
