import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import InputTextController from "components/InputTextController";
import InputNumberController from "components/InputNumberController";
import EditorController from "components/EditorController";
import CalenderController from "components/CalenderController";
import { insertJobRequest } from "redux/jobRequest/actionCreator";

const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Thêm yêu cầu" }];

const FormInsertInterview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const fields = [
    { label: "Thời gian bắt đầu", name: "time_start", type: "calender", autoFocus: true },
    { label: "Tiêu đề", name: "title", type: "inputText" },
    { label: "Thời gian kết thúc", name: "time_end", type: "calender" },
    { label: "Người nhận", name: "receiver", type: "inputNumber" },
    { label: "Địa điểm", name: "location", type: "inputText" },
    { label: "Tên ứng viên", name: "name_candidate", type: "inputText" },
    { label: "Yêu cầu tuyển dụng", name: "job_id", type: "inputText" },
    { label: "Vòng phỏng vấn", name: "round_no", type: "inputText" },
    // { label: "Đặc điểm của dự án", name: "description", type: "editor" },
  ];

  const formRender = fields.map(({ type, ...rest }, index) => {
    switch (type) {
      case "inputNumber":
        return (
          <InputNumberController
            key={index}
            {...rest}
            control={control}
            errors={errors}
          />
        );

      case "calender":
        return (
          <CalenderController
            key={index}
            {...rest}
            control={control}
            errors={errors}
          />
        );

      case "editor":
        return (
          <EditorController
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
      dispatch(insertJobRequest(data));

      history.push("/admin/jobrequest");
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
