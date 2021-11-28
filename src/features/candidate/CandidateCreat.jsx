import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import { useHistory } from "react-router";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCandidate } from "redux/candidate/action";
import { getJobRequest, getStatusJobRequest } from "redux/jobRequest/selector";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { STATUS_REQUEST } from "constants/app";
import { CANDIDATE } from "constants/appPath";

const CandidateCreat = () => {
  const items = [{ label: "Ứng viên" }, { label: " Thêm ứng viên" }];
  const history = useHistory();
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

  let formData = new FormData();

  const onHandleSubmit = (data) => {
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("source", data.source);
    formData.append("email", data.email);
    formData.append("experience", data.experience);
    formData.append("school", data.school);
    formData.append("job_id", data.job_id);
    formData.append("status", data.status);
    formData.append("cv", data.cv[0]);
    dispatch(addCandidate(formData));
    setTimeout(() => {
      history.push(CANDIDATE);
    }, 2000);
    reset();
  };

  return (
    <>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form className="gird" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="candidate_left">
            <div>
              <label htmlFor="name">Họ và tên*</label>
              <br />
              <input
                type="text"
                {...register("name", { required: true, minLength: 5 })}
              />
              {errors.name && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="phone">Số điện thoại*</label>
              <br />
              <input
                type="text"
                {...register("phone", {
                  required: true,
                  pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                })}
              />
              {errors.phone && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Trường này không đựợc để trống hoặc sai định dạng
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <br />
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Trường này không đựơc để trống hoặc sai định dạng
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
              <input
                type="text"
                {...register("school", { required: true, minLength: 5 })}
              />
              {errors.school && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="lastname6">Thêm ảnh*</label>
              <br />
              <input type="file" id="image" {...register("image")} />
            </div>
          </div>
          <div className="candidate_right">
            <div>
              <label htmlFor="lastname6">CV*</label>
              <br />
              <input
                type="file"
                id="cv"
                {...register("cv", { required: true })}
              />
              {errors.cv && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div style={{ margin: "20px 0" }}>
              <label htmlFor="status">Trạng thái*</label>
              <br />
              <select name="" id="" {...register("status", { required: true })}>
                <option value="Vòng CV">Vòng CV</option>
                <option value="Sắp xếp PV">Sắp xếp PV</option>
                <option value="PV Pass">PV Pass</option>
                <option value="PV Faild">PV Faild</option>
              </select>
              {errors.status && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="source">Nguồn*</label>
              <br />
              <select name="" id="" {...register("source", { required: true })}>
                <option value="">Chọn nguồn</option>
                <option value="Vnws">Vnws</option>
                <option value="Top CV">Top CV</option>
                <option value="Tìm việc nhanh">Tìm việc nhanh</option>
                <option value="IT việc">IT việc</option>
                <option value="University campaign">University campaign</option>
                <option value="Network">Network</option>
              </select>
              {errors.source && (
                <span style={{ color: "red", marginBottom: "7px" }}>
                  Bắt buộc phải nhập.
                </span>
              )}
            </div>
            <div style={{ margin: "20px 0" }}>
              <label>Dự án*</label>
              <br />
              <select name="" id="" {...register("job_id", { required: true })}>
                <option value=""> Chọn dự án </option>
                {data.map
                  ? data.map((item) => {
                      if (item.status === 1) {
                        return <option value={item.id}>{item.title}</option>;
                      }
                      return "";
                    })
                  : ""}
              </select>
              {errors.job_id && (
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
