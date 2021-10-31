import CustomBreadCrumb from "components/CustomBreadCrumb";
import { Button } from "primereact/button";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCandidateInterview } from "redux/candidateInterview/action";
import "./style.scss";

const items = [
  { label: "Đánh Giá Ứng viên" },
  { label: "Tạo Đánh Giá Ứng Viên" },
];

const CandidateInterview = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createCandidateInterview({ ...data }));
  };

  return (
    <div>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form className="gird" onSubmit={handleSubmit(onSubmit)}>
          <div className="candidate_left">
            <div>
              <p>i,Tư duy</p>
              <label htmlFor="thinking">Hệ thống,login *</label>
              <br />
              <input
                type="number"
                min={0}
                {...register("thinking", { required: true })}
              />
              {errors.thinking && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <p>ii,Phẩm chất</p>
              <label htmlFor="phone">Kiên trì bền bỉ*</label>
              <br />
              <input
                min={0}
                type="number"
                {...register("persistent_perseverance", { required: true })}
              />
              {errors.persistent_perseverance && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="career_goals">Đam mê mục tiêu rõ ràng*</label>
              <br />
              <input
                type="number"
                min={0}
                {...register("career_goals", {
                  required: true,
                  min: 1,
                  max: 99,
                })}
              />
              {errors.career_goals && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div style={{ margin: "20px 0" }}>
              <p>V,Tổng kết</p>
              <label htmlFor="result">Kết quả*</label>
              <br />
              <select
                className="select"
                id=""
                {...register("result", { required: true })}
              >
                <option>Kết quả</option>
                <option value="Pass">Pass</option>
                <option value="Fail">Fail</option>
                <option value="Phỏng vấn tiếp">Phỏng vấn tiếp</option>
              </select>
              {errors.result && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
          </div>
          <div className="candidate_right">
            <div>
              <p>iii,Chuyên môn</p>
              <label htmlFor="specialize_skill">Chuyên môn*</label>
              <br />
              <input
                min={0}
                type="number"
                {...register("specialize_skill", { required: true })}
              />
              {errors.specialize_skill && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <p>iiii,Khác</p>
              <label htmlFor="english">Tiếng anh*</label>
              <br />
              <input
                type="number"
                min={0}
                {...register("english", { required: true })}
              />
              {errors.english && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="adaptability">Khả năng thích ứng*</label>
              <br />
              <input
                min={0}
                type="number"
                {...register("adaptability", { required: true })}
              />
              {errors.adaptability && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="time_onbroad">Thời gian có thể onboard*</label>
              <br />
              <input
                type="text"
                {...register("time_onbroad", { required: true })}
              />
              {errors.time_onbroad && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="reviews">Nhận xét*</label>
              <br />
              <textarea
                cols={20}
                {...register("reviews", { required: true })}
              />
              {errors.reviews && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
          </div>
          <Button
            label="Đánh giá ứng viên ứng viên"
            type="submit"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </form>
      </div>
    </div>
  );
};

export default CandidateInterview;
