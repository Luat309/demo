import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import CustomBreadCrumb from "../../components/CustomBreadCrumb";
import { useHistory } from "react-router";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCandidate } from "redux/candidate/action";
import { getJobRequest, getStatusJobRequest } from "redux/jobRequest/selector";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { STATUS_REQUEST } from "constants/app";
import { Dialog } from "primereact/dialog";
import { CANDIDATE } from "constants/appPath";

const CandidateCreat = () => {
  const items = [{ label: "Ứng viên" }, { label: " Thêm ứng viên" }];
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();
  const CV = useRef(null);
  const file = useRef(null);
  const [image, setImage] = useState();
  const [Cv, setCV] = useState();
  const dispatch = useDispatch();

  const status = useSelector(getStatusJobRequest);
  const data = useSelector(getJobRequest);

  useEffect(() => {
    if (status === STATUS_REQUEST.IDLE) {
      dispatch(fetchJobRequest());
    }
  }, [dispatch, status]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({});

  const onUploadImage = () => {
    setImage(file.current.files[0]);
  };

  const onUploadCV = () => {
    setCV(CV.current.files[0]);
  };

  let formData = new FormData();
  const onHandleSubmit = (data) => {
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("source", data.source);
    formData.append("email", data.email);
    formData.append("experience", data.experience);
    formData.append("school", data.school);
    formData.append("image", image);
    formData.append("job_id", data.job_id);
    formData.append("status", data.status);
    formData.append("cv", Cv);
    dispatch(addCandidate(formData));
    setShowMessage(true);
    setTimeout(() => {
      history.push(CANDIDATE);
    }, 2000);
    reset();
  };

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
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
            Bạn đã thêm ứng viên thành công!
          </p>
        </div>
      </Dialog>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form className="gird" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="candidate_left">
            <div>
              <label htmlFor="name">Họ và tên*</label>
              <br />
              <input type="text" {...register("name", { required: true })} />
              {errors.name && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="phone">Số điện thoại*</label>
              <br />
              <input type="text" {...register("phone", { required: true })} />
              {errors.phone && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <br />
              <input
                type="text"
                min={0}
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="experience">Kinh nghiệm*</label>
              <br />
              <input
                type="number"
                min={0}
                {...register("experience", {
                  required: true,
                  min: 1,
                  max: 99,
                })}
              />
              {errors.experience && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="school">Trường*</label>
              <br />
              <input type="text" {...register("school", { required: true })} />
              {errors.school && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="lastname6">Thêm ảnh*</label>
              <br />
              <input type="file" ref={file} onChange={onUploadImage} />
            </div>
          </div>
          <div className="candidate_right">
            <div>
              <label htmlFor="lastname6">CV*</label>
              <br />
              <input type="file" ref={CV} onChange={onUploadCV} />
            </div>
            <div style={{ margin: "20px 0" }}>
              <label htmlFor="status">Trạng thái*</label>
              <br />
              <select name="" id="" {...register("status", { required: true })}>
                <option>Trạng thái</option>
                <option value="Vòng CV">Vòng CV</option>
                <option value="CV pass vòng 1 (hr)">CV pass vòng 1 (hr)</option>
                <option value="CV pass vòng 2 (TBP)">
                  CV pass vòng 2 (TBP)
                </option>
                <option value="Sắp xếp PV">Sắp xếp PV</option>
                <option value="PV Pass">PV Pass</option>
                <option value="PV Faild">PV Faild</option>
              </select>
              {errors.phone && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="source">Nguồn*</label>
              <br />
              <select name="" id="" {...register("source", { required: true })}>
                <option>Nguồn</option>
                <option value="Vnws">Vnws</option>
                <option value="Top CV">Top CV</option>
                <option value="Tìm việc nhanh">Tìm việc nhanh</option>
                <option value="IT việc">IT việc</option>
                <option value="University campaign">University campaign</option>
                <option value="Network">Network</option>
              </select>
              {errors.phone && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div style={{ margin: "20px 0" }}>
              <label>Dự án*</label>
              <br />
              <select name="" id="" {...register("job_id", { required: true })}>
                {data.map
                  ? data.map((item) => {
                      if (item.status === 1) {
                        return <option value={item.id}>{item.title}</option>;
                      }
                      return "";
                    })
                  : ""}
              </select>
              {errors.phone && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
          </div>
          <Button
            label="Thêm ứng viên"
            type="submit"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </form>
      </div>
    </>
  );
};

export default CandidateCreat;
