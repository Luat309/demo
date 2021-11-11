import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import { CANDIDATE_INTERVIEW } from "constants/appPath";
import moment from "moment";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCandidate } from "redux/candidate/action";
import { fetchInterview } from "redux/interview/actionCreator";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { getJobRequest } from "redux/jobRequest/selector";
import CandidateInterview from "./CandidateInterview";

const items = [{ label: "Đánh Giá Ứng viên" }, { label: " Đánh giá" }];
const CandidateInterviewList = () => {
  const dispatch = useDispatch();
  const job = useSelector(getJobRequest);
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSelector((state) => state.interview);
  const { cadidate } = useSelector((state) => state.cadidate);
  const [dateInterview, setDateInterview] = useState();

  useEffect(() => {
    dispatch(fetchInterview());
    dispatch(fetchJobRequest());
    dispatch(getCandidate());
  }, [dispatch]);

  const jobBodyTemplate = (rowData) => {
    return job.map
      ? job.map((item) => {
          if (item.id === rowData.job_id) {
            return <p>{item.title}</p>;
          }
          return "";
        })
      : "";
  };
  const timeBodyTemplate = (rowData) => {
    return (
      <p>
        {moment(rowData.time_start).format("HH:mm, DD/MM/YYYY")}
        {"-"}
        {moment(rowData.time_end).format("HH:mm, DD/MM/YYYY")}
      </p>
    );
  };
  const candidateBodyTemplate = (rowData) => {
    return cadidate.map
      ? cadidate.map((item) => {
          if (item.id === rowData.name_candidate) {
            return <p>{item.name}</p>;
          }
          return "";
        })
      : "";
  };

  const handleCandidateInterView = (data) => {
    setIsOpen(true);
    setDateInterview(data);
  };
  const actionBodyTemplate = (rowData) => {
    console.log(rowData.time_end, "end");
    console.log(rowData.time_start, "start");
    return (
      <>
        {moment(rowData.time_end).isBefore() && (
          <Button
            onClick={() => handleCandidateInterView(rowData)}
            label="Đánh giá"
            className="p-button-raised p-button-secondary p-button-text "
          />
        )}
      </>
    );
  };

  return (
    <div>
      <Dialog
        visible={isOpen}
        onHide={() => setIsOpen(false)}
        position="top"
        style={{ width: "90%" }}
      >
        <CandidateInterview data={dateInterview} />
      </Dialog>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <CustomDataTable dataTable={data} showSearch={true} selectionMode="single">
          <Column
            field="job_id"
            header="Yêu cầu tuyển dụng"
            body={jobBodyTemplate}
          ></Column>
          <Column field="" header="Thời gian" body={timeBodyTemplate}></Column>
          <Column field="location" header="Địa điểm"></Column>
          <Column
            field="name_candidate"
            header="Ứng viên"
            body={candidateBodyTemplate}
          ></Column>
          <Column
            field=""
            header="Hành động"
            body={actionBodyTemplate}
          ></Column>
        </CustomDataTable>
      </div>
    </div>
  );
};

export default CandidateInterviewList;
