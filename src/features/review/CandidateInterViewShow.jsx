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
        <Column field="candidate_id" header="Yêu cầu tuyển dụng"></Column>
        <Column field="interview_id" header="Thời gian"></Column>
        <Column field="interview_id" header="Địa điểm"></Column>
        <Column field="interview_id" header="Ứng viên"></Column>
      </CustomDataTable>
    </div>
  );
};

export default CandidateInterViewShow;
