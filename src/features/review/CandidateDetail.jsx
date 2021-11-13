import React from "react";
import { useSelector } from "react-redux";
import { getCandidateInterviews } from "redux/candidateInterview/selector";

const CandidateDetail = ({ data }) => {
  const candidateInterview = useSelector(getCandidateInterviews);
  const array = candidateInterview.filter(
    (item) => item.candidate_id === data.candidate_id
  );

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Đánh giá ứng viên</h2>
      {array?.map((item) => {
        return (
          <>
            <p style={{ textAlign: "center" }}>Vòng {item?.round}</p>
            <div className="flex">
              <div className="col-2 mx-5">
                <img
                  src={`http://35.240.196.153/storage/images/candidate/${item?.image}`}
                  alt=""
                  width="250px"
                />
                <p>Họ tên : {item?.candidate_name}</p>
                <p>Email : {item?.email}</p>
              </div>
              <div className="col-10">
                <div className="flex ">
                  <div className=" mr-5">
                    <p>i,Tư duy</p>
                    <p>Hệ thống,login : {item?.thinking}</p>
                    <p>ii,Phẩm chất</p>
                    <p>Kiên trì bền bỉ : {item?.persistent_perseverance}</p>
                    <p>Đam mê mục tiêu rõ ràng : {item?.career_goals}</p>
                    <p>V,Tổng kết</p>
                    <p>Kết quả : {item?.result}</p>
                  </div>
                  <div>
                    <p>iii,Chuyên môn</p>
                    <p>Chuyên môn : {item?.specialize_skill}</p>
                    <p>iiii,Khác</p>
                    <p>Tiếng anh : {item?.english}</p>
                    <p>Khả năng thích ứng :{item?.adaptability}</p>
                    <p>Thời gian có thể onboard: {item?.time_onbroad}</p>
                    <p>Nhận xét</p>
                    <span>- {item?.reviews}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CandidateDetail;
