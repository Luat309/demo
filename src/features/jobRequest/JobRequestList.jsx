import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";

import { STATUS_REQUEST } from "constants/app";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { getStatus, getData } from "redux/jobRequest/selector";
import JobRequestDetail from "./JobRequestDetail";

const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Danh sách yêu cầu" }];

const cols = [
  // { field: "description", header: "Dac diem cua du an" },
  { field: "title", header: "Tên dự án", width: "250px" },
  { field: "amount", header: "Số lượng tuyển", width: "150px" },
  { field: "position", header: "Vị trí tuyển dụng", width: "250px" },
  { field: "wage", header: "Mức lương", width: "150px" },
  { field: "petitioner", header: "Người yêu cầu", width: "150px" },
  { field: "deadline", header: "Hạn tuyển", width: "100px" },
  { field: "action", header: <i className="pi pi-cog" />, width: "150px" },
];

const JobRequestList = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const data = useSelector(getData);
  const history = useHistory();
  const [jobDetail, setJobDetail] = useState();
  const [isOpen, setIsOpen] = useState(false);
  // const status = useSelector(getStatus);
  // const data = useSelector(getData);

  useEffect(() => {
    if (status === STATUS_REQUEST.IDLE) {
      dispatch(fetchJobRequest());
    }
  }, [dispatch, status]);

  const handleView = (data) => {
    setJobDetail(data);
    setIsOpen(true);
  };

  const handleUpdate = (data) => {
    history.push(`/admin/jobrequest/${data.id}`);
  };

  const handleDelete = (data) => {
    setIsOpen(!isOpen);
    console.log(data.id);
  };

  const genActionCol = (data) => {
    return (
      <>
        <Button
          onClick={() => handleView(data)}
          className="p-button-rounded p-button-text p-button-info"
          icon="pi pi-eye"
        />
        <Button
          onClick={() => handleUpdate(data)}
          className="p-button-rounded p-button-text p-button-help"
          icon="pi pi-pencil"
        />
        <Button
          onClick={() => handleDelete(data)}
          className="p-button-rounded p-button-text p-button-danger"
          icon="pi pi-trash"
        />
      </>
    );
  };

  const columns = cols.map(({ field, header, width }) => {
    switch (field) {
      case "action":
        return (
          <Column
            key={field}
            header={header}
            body={genActionCol}
            style={{
              textAlign: "center",
              width: width,
            }}
          />
        );

      default:
        return (
          <Column
            key={field}
            header={header}
            field={field}
            style={{
              width: width,
            }}
          />
        );
    }
  });

  return (
    <>
      <JobRequestDetail
        jobDetail={jobDetail}
        isOpen={isOpen}
        onHide={() => setIsOpen(false)}
      />
      <CustomBreadCrumb items={items} />
      {status === STATUS_REQUEST.LOADING && data}
      {status === STATUS_REQUEST.SUCCEEDED && (
        <div className="card">
          <CustomDataTable
            selectionMode="single"
            onSelectionChange={(data) => {
              console.log("(((");
              setJobDetail(data.value);
              setIsOpen((prevState) => !prevState);
            }}
            dataTable={data}
          >
            {columns}
          </CustomDataTable>
        </div>
      )}
    </>
  );
};

export default JobRequestList;
