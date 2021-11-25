import CustomBreadCrumb from "components/CustomBreadCrumb";
import { CANDIDATE_INTERVIEW_SHOW } from "constants/appPath";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createCandidateInterview } from "redux/candidateInterview/action";
import "./style.scss";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const items = [
  { label: "Đánh Giá Ứng viên" },
  { label: "Tạo Đánh Giá Ứng Viên" },
];

const CandidateInterview = ({ data }) => {
  const history = useHistory();
  let today = new Date();
  const [showMessage, setShowMessage] = useState(false);
  const [timeOnbroad, setTimeOnbroad] = useState();
  let invalidDates = [today];
  console.log(timeOnbroad);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (value) => {
    setShowMessage(true);
    const newValue = {
      ...value,
      candidate_id: data.name_candidate,
      interview_id: data.id,
      time_start: data.time_start,
      time_end: data.time_end,
      user_id: currentUser?.user?.id,
      time_onbroad: timeOnbroad,
      email: currentUser?.user?.name,
    };
    console.log(newValue, "value hdshh");
    if (newValue) {
      dispatch(createCandidateInterview(newValue));
      // setTimeout(() => {
      //   history.push(CANDIDATE_INTERVIEW_SHOW);
      // }, 2000);
      reset();
    }
  };

  const option = [0, 1, 2, 3, 4, 5];
  const mapOtion = option.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <div>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Thành công!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Bạn đánh giá thành công!
          </p>
        </div>
      </Dialog>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form className="gird" onSubmit={handleSubmit(onSubmit)}>
          <div className="candidate_left">
            <div>
              <p>i,Tư duy</p>
              <label htmlFor="thinking">Hệ thống,login *</label>
              <br />
              <select
                name="thinking"
                id=""
                {...register("thinking", { required: true })}
              >
                {mapOtion}
              </select>
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
              <select
                name="persistent_perseverance"
                id=""
                {...register("persistent_perseverance", { required: true })}
              >
                {mapOtion}
              </select>
              {errors.persistent_perseverance && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="career_goals">Đam mê mục tiêu rõ ràng*</label>
              <br />
              <select
                name="career_goals"
                id=""
                {...register("career_goals", { required: true })}
              >
                {mapOtion}
              </select>
              {errors.career_goals && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="time_onbroad">Thời gian có thể onboard*</label>
              <br />
              <div className="p-field p-col-12 p-md-4">
                <Calendar
                  id="disableddays"
                  value={timeOnbroad}
                  onChange={(e) => setTimeOnbroad(e.value)}
                  disabledDates={invalidDates}
                  disabledDays={[0, 6]}
                  readOnlyInput
                />
              </div>
            </div>
            <div>
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
              <select
                name="specialize_skill"
                id=""
                {...register("specialize_skill", { required: true })}
              >
                {mapOtion}
              </select>
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
              <select
                name="english"
                id=""
                {...register("english", { required: true })}
              >
                {mapOtion}
              </select>
              {errors.english && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="adaptability">Khả năng thích ứng*</label>
              <br />
              <select
                name="adaptability"
                id=""
                {...register("adaptability", { required: true })}
              >
                {mapOtion}
              </select>
              {errors.adaptability && (
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
