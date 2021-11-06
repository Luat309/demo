import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import InputTextController from "components/InputTextController";
import InputNumberController from "components/InputNumberController";
import EditorController from "components/EditorController";
import CalenderController from "components/CalenderController";
import { updateJobRequest } from "redux/jobRequest/actionCreator";
import { getJobRequestById } from "redux/jobRequest/selector";
import formatTime from "utils/formatTime";

const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Cập nhật yêu cầu" }];

const FormUpdateJobRequest = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const jobDetail = useSelector(getJobRequestById(id));
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      ...jobDetail,
      deadline: new Date(Date.parse(jobDetail.deadline)),
      created_at: undefined,
      updated_at: undefined,
      status: undefined,
      reason: undefined,
    });
  }, [reset, jobDetail]);

  const fields = [
    { label: "Tên dự án", name: "title", type: "inputText", autoFocus: true },
    { label: "Hạn tuyển dụng", name: "deadline", type: "calender" },
    { label: "Vị trí tuyển dụng", name: "position", type: "inputText" },
    { label: "Số lượng tuyển dụng", name: "amount", type: "inputNumber" },
    { label: "Địa điểm làm việc", name: "location", type: "inputText" },
    { label: "Thời gian làm việc", name: "working_time", type: "inputText" },
    { label: "Người yêu cầu", name: "petitioner", type: "inputText" },
    { label: "Mức lương", name: "wage", type: "inputText" },
    { label: "Đặc điểm của dự án", name: "description", type: "editor" },
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

  const onSubmit = async (data) => {
    dispatch(
      updateJobRequest({
        ...data,
        deadline: formatTime.formatShortsDate(data?.deadline),
      })
    );

    history.push("/admin/jobrequest");
  };

  return (
    <>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-fluid p-formgrid p-grid">{formRender}</div>
          <Button type="submit" label="Cập nhật yêu cầu" />
        </form>
      </div>
    </>
  );
};

export default FormUpdateJobRequest;
