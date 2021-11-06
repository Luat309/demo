import CustomBreadCrumb from "components/CustomBreadCrumb";
import { CANDIDATE_INTERVIEW_SHOW } from "constants/appPath";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { editCandidateInterview } from "redux/candidateInterview/action";
import { getCandidateInterviews } from "redux/candidateInterview/selector";
import "./style.scss";

const items = [{ label: "Đánh Giá Ứng viên" }, { label: "Sửa Đánh giá" }];
const EditCandidateInterview = () => {
  const { id } = useParams();
  const candidateInterview = useSelector(getCandidateInterviews);
  const [findValue, setFindValue] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    const find = candidateInterview.find((item) => item.id === Number(id));
    setFindValue(find);
    reset({ ...find });
  }, [findValue]);

  const handleEdit = (value) => {
    dispatch(editCandidateInterview(value));
    setShowMessage(true);
    setTimeout(() => {
      history.push(CANDIDATE_INTERVIEW_SHOW);
    }, 2000);
    reset();
  };

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
            Sửa đánh giá thành công!
          </p>
        </div>
      </Dialog>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form className="gird" onSubmit={handleSubmit(handleEdit)}>
          <div className="candidate_left">
            <div>
              <p>i,Tư duy</p>
              <label htmlFor="thinking">Hệ thống,login *</label>
              <br />
              <input
                defaultValue={findValue?.thinking}
                type="number"
                min={0}
                max={5}
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
                max={5}
                type="number"
                defaultValue={findValue?.persistent_perseverance}
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
                max={5}
                defaultValue={findValue?.career_goals}
                {...register("career_goals", {
                  required: true,
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
                value={findValue?.result}
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
                max={5}
                type="number"
                defaultValue={findValue?.specialize_skill}
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
                max={5}
                defaultValue={findValue?.english}
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
                max={5}
                type="number"
                defaultValue={findValue?.adaptability}
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
                defaultValue={findValue?.time_onbroad}
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
                defaultValue={findValue?.reviews}
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
            label="Sửa đánh giá ứng viên ứng viên"
            type="submit"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </form>
      </div>
    </div>
  );
};

export default EditCandidateInterview;
