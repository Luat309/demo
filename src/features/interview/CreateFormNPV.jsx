import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import InputTextController from "components/InputTextController";
import CalenderController from "components/CalenderController";
import DropdownController from "components/DropdownController";
import ChipsController from "components/ChipsController";
import { insertJobRequest } from "redux/jobRequest/actionCreator";
import MultiSelectController from "components/MultiSelectController";
import { getApprovedJobRequest } from "redux/jobRequest/selector";
import { getCandidates } from "redux/candidate/selector";
import { ROUND_INTERVIEW } from "constants/app";
import { createInterview } from "redux/interview/actionCreator";

const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Thêm yêu cầu" }];

const FormInsertInterview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const approvedJobRequest = useSelector(getApprovedJobRequest);
  const candidates = useSelector(getCandidates);

  const fields = [
    {
      label: "Thời gian bắt đầu",
      name: "time_start",
      type: "calender",
      showTime: true,
      autoFocus: true,
    },
    { label: "Tiêu đề", name: "title", type: "inputText" },
    {
      label: "Thời gian kết thúc",
      name: "time_end",
      type: "calender",
      showTime: true,
    },
    { label: "Người nhận", name: "receiver", type: "chips" },
    { label: "Địa điểm", name: "location", type: "inputText" },
    {
      label: "Tên ứng viên",
      name: "name_candidate",
      type: "multiSelect",
      options: candidates,
      optionLabel: "name",
    },
    {
      label: "Yêu cầu tuyển dụng",
      name: "job_id",
      type: "dropdown",
      options: approvedJobRequest,
      optionLabel: "title",
    },
    {
      label: "Vòng phỏng vấn",
      name: "round_no",
      type: "dropdown",
      options: ROUND_INTERVIEW,
      optionLabel: "title",
    },
  ];

  const formRender = fields.map(({ type, ...rest }, index) => {
    switch (type) {
      case "calender":
        return (
          <CalenderController
            key={index}
            {...rest}
            control={control}
            errors={errors}
          />
        );

      case "chips":
        return (
          <ChipsController
            key={index}
            {...rest}
            control={control}
            errors={errors}
          />
        );

      case "multiSelect":
        return (
          <MultiSelectController
            key={index}
            {...rest}
            control={control}
            errors={errors}
          />
        );

      case "dropdown":
        return (
          <DropdownController
            key={index}
            {...rest}
            control={control}
            errors={errors}
          />
        );

      default:
        return (
          <InputTextController
            key={index}
            {...rest}
            control={control}
            errors={errors}
          />
        );
    }
  });

  const onSubmit = (data) => {
    try {
      // console.log("OLE GUNAR SOLSA", {
      //   ...data,
      //   job_id: data.job_id?.id,
      //   receiver: data.receiver.join(","),
      //   name_candidate: data.name_candidate.map((item) => item.id).join(","),
      // });

      dispatch(createInterview({
        ...data,
        job_id: data.job_id?.id,
        receiver: data.receiver.join(","),
        name_candidate: data.name_candidate.map((item) => item.id).join(","),
      }));

      // history.push("/admin/jobrequest");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-fluid p-formgrid p-grid">{formRender}</div>
          <Button type="submit" label="Thêm lịch phỏng vấn" />
        </form>
      </div>
    </>
  );
};

export default FormInsertInterview;
