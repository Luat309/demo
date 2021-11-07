import React from "react";

const CandidateDetail = ({ data }) => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Đánh giá ứng viên</h2>
      <p style={{ textAlign: "center" }}>Vòng {data?.round}</p>
      <div className="flex">
        <div className="col-2 mr-1">
          <img
            src={`http://35.240.196.153/storage/images/candidate/${data?.image}`}
            alt=""
          />
          <p>Họ tên : {data?.candidate_name}</p>
          <p>Email : {data?.email}</p>
        </div>
        <div className="col-10">
          <div className="flex ">
            <div className=" mr-5">
              <p>i,Tư duy</p>
              <p>Hệ thống,login : {data?.thinking}</p>
              <p>ii,Phẩm chất</p>
              <p>Kiên trì bền bỉ : {data?.persistent_perseverance}</p>
              <p>Đam mê mục tiêu rõ ràng : {data?.career_goals}</p>
              <p>V,Tổng kết</p>
              <p>Kết quả : {data?.result}</p>
            </div>
            <div>
              <p>iii,Chuyên môn</p>
              <p>Chuyên môn : {data?.specialize_skill}</p>
              <p>iiii,Khác</p>
              <p>Tiếng anh : {data?.english}</p>
              <p>Khả năng thích ứng :{data?.adaptability}</p>
              <p>Thời gian có thể onboard: {data?.time_onbroad}</p>
              <p>Nhận xét</p>
              <span>- {data?.reviews}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;