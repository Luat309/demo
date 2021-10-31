import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";

import { STATUS_REQUEST } from "constants/app";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchInterview } from "redux/interview/actionCreator";
import { getInterviews, getStatusInterview } from "redux/interview/selector";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { getStatusJobRequest, getJobRequest } from "redux/jobRequest/selector";
// import JobRequestDetail from "./JobRequestDetail";

const items = [{ label: "Lịch phỏng vấn" }, { label: "Danh sách lịch phỏng vấn" }];

const cols = [
  // { field: "description", header: "Dac diem cua du an" },
  { field: "job", header: "Dự án", width: "250px" },
  { field: "round_no", header: "Số lượng tuyển", width: "150px" },
  { field: "position", header: "Vị trí tuyển dụng", width: "250px" },
  { field: "time_start", header: "Mức lương", width: "150px" },
  { field: "time_end", header: "Người yêu cầu", width: "150px" },
  { field: "name_candidate", header: "Hạn tuyển", width: "100px" },
  { field: "action", header: <i className="pi pi-cog" />, width: "150px" },
];

const InterviewList = () => {
  const dispatch = useDispatch();
  const statusJobRequest = useSelector(getStatusJobRequest);
  const jobRequest = useSelector(getJobRequest);
  const statusInterview = useSelector(getStatusInterview);
  const interviews = useSelector(getInterviews);
  // const [jobDetail, setJobDetail] = useState();
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (statusJobRequest === STATUS_REQUEST.IDLE) {
      dispatch(fetchJobRequest());
    }
  }, [dispatch, statusJobRequest]);

  useEffect(() => {
    if (statusInterview === STATUS_REQUEST.IDLE) {
      dispatch(fetchInterview());
    }
  }, [dispatch, statusInterview]);

  // const handleView = (data) => {
    // setJobDetail(data);
    // setIsOpen(true);
  // };

  const genActionCol = (data) => {
    return (
      <>
        {/* <Button
          onClick={() => handleView(data)}
          className="p-button-rounded p-button-text p-button-info"
          icon="pi pi-eye"
        /> */}
        <Button
          className="p-button-rounded p-button-text p-button-help"
          icon="pi pi-pencil"
        />
        <Button
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
      {/* <JobRequestDetail
        jobDetail={jobDetail}
        isOpen={isOpen}
        onHide={() => setIsOpen(false)}
      /> */}
      <CustomBreadCrumb items={items} />
      {statusJobRequest === STATUS_REQUEST.LOADING && interviews}
      {statusJobRequest === STATUS_REQUEST.SUCCEEDED && (
        <div className="card">
          <CustomDataTable
            selectionMode="single"
            // onSelectionChange={(data) => {
            //   setJobDetail(data.value);
            //   setIsOpen(true);
            // }}
            dataTable={interviews}
          >
            {columns}
          </CustomDataTable>
        </div>
      )}
    </>
  );
};

export default InterviewList;
