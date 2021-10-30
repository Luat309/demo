import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import CustomBreadCrumb from "../../components/CustomBreadCrumb";
import { useHistory } from "react-router";
import styles from "./styles.module.scss";

const CandidateCreat = () => {
  const items = [{ label: "Ứng viên" }, { label: " Thêm ứng viên" }];
  const CV = useRef(null);
  const file = useRef(null);
  const history = useHistory();
  const [image, setImage] = useState();
  const [Cv, setCV] = useState();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({});

  return (
    <>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form className={styles.gird}>
          <div className={styles.candidate_left}>
            <div>
              <label htmlFor="name">Họ và tên*</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="phone">Số điện thoại*</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="experience">Kinh nghiệm*</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="school">Trường*</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="lastname6">Thêm ảnh*</label>
              <br />
              <input type="file" ref={file} />
            </div>
          </div>
          <div className={styles.candidate_right}>
            <div>
              <label htmlFor="lastname6">CV*</label>
              <br />
              <input type="file" ref={CV} />
            </div>
            <div style={{ margin: "20px 0" }}>
              <label htmlFor="status">Trạng thái*</label>
              <br />
              <select name="" id="">
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
            </div>
            <div>
              <label htmlFor="status">Nguồn*</label>
              <br />
              <select name="" id="">
                <option>Nguồn</option>
                <option value="Vnws">Vnws</option>
                <option value="Top CV">Top CV</option>
                <option value="Tìm việc nhanh">Tìm việc nhanh</option>
                <option value="IT việc">IT việc</option>
                <option value="University campaign">University campaign</option>
                <option value="Network">Network</option>
              </select>
            </div>
            <div style={{ margin: "20px 0" }}>
              <label>Dự án*</label>
              <br />
              <br />
              <select name="" id="">
                <option>Dự án</option>
                <option value="1">Vnws</option>
                <option value="2">Top CV</option>
                <option value="3">Tìm việc nhanh</option>
                <option value="4">IT việc</option>
                <option value="6">University campaign</option>
                <option value="7">Network</option>
              </select>
            </div>
          </div>
          <Button
            label="Thêm ứng viên"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </form>
      </div>
    </>
  );
};

export default CandidateCreat;
