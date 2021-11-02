import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import moment from "moment";
import { Column } from "primereact/column";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidateInterview } from "redux/candidateInterview/action";
import { fetchInterview } from "redux/interview/actionCreator";
import { getCandidate } from "redux/candidate/action";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { getJobRequest } from "redux/jobRequest/selector";

const items = [{ label: "Đánh Giá Ứng viên" }, { label: " Đánh giá" }];
const CandidateInterViewShow = () => {
  const dispatch = useDispatch();
  const { candidateInterview } = useSelector(
    (state) => state.candidateInterview
  );
  const { data } = useSelector((state) => state.interview);
  const { cadidate } = useSelector((state) => state.cadidate);
  const job = useSelector(getJobRequest);

  useEffect(() => {
    dispatch(getCandidateInterview());
    dispatch(fetchInterview());
    dispatch(getCandidate());
    dispatch(fetchJobRequest());
  }, [dispatch]);

  const timeBodyTemplate = (rowData) => {
    return data.map
      ? data.map((item) => {
          if (item.id === rowData.interview_id) {
            return (
              <p>
                {moment(rowData.time_start).format("hh/mm/ss dd/mm/yyyy")}
                {"-"}
                {moment(rowData.time_end).format("H:m:ss dd/mm/yyyy")}
              </p>
            );
          }
          return "";
        })
      : "";
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

  return (
    <div>
      <CustomBreadCrumb items={items} />
      <CustomDataTable value={candidateInterview}>
        <Column
          field="candidate_id"
          header="Thời gian phỏng vấn"
          body={timeBodyTemplate}
        ></Column>
        <Column
          field="name_candidate"
          header="Họ tên ứng viên"
          body={candidateBodyTemplate}
        ></Column>
        <Column
          field="interview_id"
          header="Dự án"
          body={jobBodyTemplate}
        ></Column>
        <Column field="job_id" header="Vị trí ứng tuyển "></Column>
        <Column field="reviews" header="Nhận xét"></Column>
     
      </CustomDataTable>
    </div>
  );
};

export default CandidateInterViewShow;
