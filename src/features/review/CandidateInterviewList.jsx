import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import { CANDIDATE_INTERVIEW } from "constants/appPath";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCandidate } from "redux/candidate/action";
import { getCandidateInterview } from "redux/candidateInterview/action";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { getData } from "redux/jobRequest/selector";
import CandidateInterview from "./CandidateInterview";

const items = [{ label: "Đánh Giá Ứng viên" }, { label: " Đánh giá" }];
const CandidateInterviewList = () => {
  const dispatch = useDispatch();
  const job = useSelector(getData);
  const [isOpen, setIsOpen] = useState(false);

  const { candidateInterview } = useSelector(
    (state) => state.candidateInterview
  );
  const { cadidate } = useSelector((state) => state.cadidate);

  useEffect(() => {
    dispatch(getCandidateInterview());
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
  const interviewBodyTemplate = (rowData) => {
    let timeInterview;
    return job.map
      ? job.map((item) => {
          if (item.id === rowData.job_id) {
            return <p>{item.title}</p>;
          }
          return "";
        })
      : "";
  };

  const candidateBodyTemplate = (rowData) => {
    return cadidate.map
      ? cadidate.map((item) => {
          if (item.id === rowData.cadidate_id) {
            return <p>{item.name}</p>;
          }
          return "";
        })
      : "";
  };

  const handleCandidateInterView = (data) => {
    setIsOpen(true);
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          onClick={() => handleCandidateInterView(rowData)}
          label="Đánh giá"
          className="p-button-raised p-button-secondary p-button-text"
        />
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
        <CandidateInterview />
      </Dialog>
      <CustomBreadCrumb items={items} />
      <CustomDataTable value={candidateInterview}>
        <Column
          field="candidate_id"
          header="Yêu cầu tuyển dụng"
          body={jobBodyTemplate}
        ></Column>
        <Column
          field="interview_id"
          header="Thời gian"
          body={interviewBodyTemplate}
        ></Column>
        <Column field="interview_id" header="Địa điểm"></Column>
        <Column
          field="interview_id"
          header="Ứng viên"
          body={candidateBodyTemplate}
        ></Column>
        <Column field="" header="Hành động" body={actionBodyTemplate}></Column>
      </CustomDataTable>
    </div>
  );
};

export default CandidateInterviewList;
