import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import { insertJobRequest } from "redux/jobRequest/actionCreator";
import PermissionButton from "components/PermissionButton";
import genElementsForm from "utils/genElementsForm";
import { useEffect } from "react";

const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Thêm yêu cầu" }];

const FormInsertJobRequest = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const fields = [
    { label: "Tên dự án", name: "title", type: "inputText", autoFocus: true },
    { label: "Hạn tuyển dụng", name: "deadline", type: "calender" },
    { label: "Vị trí tuyển dụng", name: "position", type: "inputText" },
    { label: "Số lượng tuyển dụng", name: "amount", type: "inputNumber" },
    { label: "Địa điểm làm việc", name: "location", type: "inputText" },
    { label: "Thời gian làm việc", name: "working_time", type: "inputText" },
    { label: "Mức lương", name: "wage", type: "inputText" },
    { label: "Đặc điểm của dự án", name: "description", type: "editor" },
  ];

  const formRender = genElementsForm(fields, control, errors);

  useEffect(() => {
    const {
      user: { name },
    } = JSON.parse(localStorage.getItem("currentUser"));

    reset({
      petitioner: name,
    });
  }, [reset]);

  const onSubmit = (data) => {
    dispatch(insertJobRequest(data, () => {
      history.push("/admin/jobrequest");
    }));
  };

  return (
    <>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-fluid p-formgrid p-grid">{formRender}</div>

          <PermissionButton
            name="insertJobRequest"
            type="submit"
            label="Thêm yêu cầu"
          />
        </form>
      </div>
    </>
  );
};

export default FormInsertJobRequest;
