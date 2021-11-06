import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import { STATUS_REQUEST } from "constants/app";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getInterviews, getStatusInterview } from "redux/interview/selector";
// import JobRequestDetail from "./JobRequestDetail";

const items = [
  { label: "Lịch phỏng vấn" },
  { label: "Danh sách lịch phỏng vấn" },
];

const cols = [
  { field: "job_name", header: "Dự án", width: "250px" },
  { field: "round_no", header: "Vòng", width: "100px" },
  { field: "location", header: "Địa điểm", width: "150px" },
  { field: "time_interview", header: "Thời gian", width: "200px" },
  { field: "candidate_name", header: "Ứng viên", width: "150px" },
  { field: "receiver", header: "Người phỏng vấn", width: "150px" },
  { field: "action", header: <i className="pi pi-cog" />, width: "150px" },
];

const InterviewList = () => {
  const statusInterview = useSelector(getStatusInterview);
  const interviews = useSelector(getInterviews);
  // const [jobDetail, setJobDetail] = useState();
  // const [isOpen, setIsOpen] = useState(false);

  const genActionCol = (data) => {
    return (
      <>
        <Button
          tooltip="Xem chi tiết"
          // onClick={() => handleClickView(data)}
          className="p-button-rounded p-button-text p-button-info"
          icon="pi pi-eye"
        />
        <Button
          tooltip="Cập nhật"
          // onClick={() => handleClickUpdate(data)}
          className="p-button-rounded p-button-text p-button-help"
          icon="pi pi-pencil"
          // disabled={data.status !== APPROVAL_STATUS.CHO_DUYET}
        />
        <Button
          tooltip="Xóa"
          // onClick={() => handleClickDelete(data)}
          className="p-button-rounded p-button-text p-button-danger"
          icon="pi pi-trash"
          // disabled={data.status !== APPROVAL_STATUS.CHO_DUYET}
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
      {statusInterview === STATUS_REQUEST.LOADING && "Đang tải dữ liệu..."}
      {statusInterview === STATUS_REQUEST.SUCCEEDED && (
        <div className="card">
          <CustomDataTable
            selectionMode="single"
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
