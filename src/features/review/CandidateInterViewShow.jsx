import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import { Column } from "primereact/column";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidateInterview } from "redux/candidateInterview/action";

const items = [{ label: "Đánh Giá Ứng viên" }, { label: " Đánh giá" }];
const CandidateInterViewShow = () => {
  const dispatch = useDispatch();
  const { candidateInterview } = useSelector(
    (state) => state.candidateInterview
  );
  useEffect(() => {
    dispatch(getCandidateInterview());
  }, [dispatch]);
  return (
    <div>
      <CustomBreadCrumb items={items} />
      <CustomDataTable value={candidateInterview}>
        <Column field="candidate_id" header="Thời gian phỏng vấn"></Column>
        <Column field="interview_id" header="Họ tên ứng viên"></Column>
        <Column field="interview_id" header="Dự án"></Column>
        <Column field="interview_id" header="Vị trí ứng tuyển "></Column>
        <Column field="interview_id" header="Nhận xét"></Column>
      </CustomDataTable>
    </div>
  );
};

export default CandidateInterViewShow;
