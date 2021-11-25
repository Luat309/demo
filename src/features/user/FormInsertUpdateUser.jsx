import { Button } from "primereact/button";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import genElementsForm from "utils/genElementsForm";

const FormInsertUpdateUser = (props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const status = [
    { status: 0, name: "Ngừng hoạt động" },
    { status: 1, name: "Hoạt động" },
  ];

  const fields = [
    {
      label: "Mã nhân viên",
      name: "employee_code",
      type: "inputText",
      autoFocus: true,
    },
    { label: "Tên nhân viên", name: "name", type: "inputText" },
    { label: "Email", name: "email", type: "inputText" },
    { label: "Mật khẩu", name: "password", type: "inputText" },
    { label: "Chức vụ", name: "role", type: "inputText" },
    {
      label: "Trạng thái ",
      name: "status",
      type: "dropdown",
      options: status,
      optionLabel: "name",
    },
  ];

  const onSubmit = (data) => {
    console.log(data, "hihi");
  };

  const formRender = genElementsForm(fields, control, errors);

  useEffect(() => {
    reset(props.data);
  }, [reset, props.data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-fluid p-formgrid p-grid">{formRender}</div>

      <Button
        style={{
          display: "block",
          margin: "0 auto",
          marginTop: "30px",
        }}
        type="submit"
        label={props.actionType === "INSERT" ? "Thêm nhân viên" : "Xác nhận"}
      />
    </form>
  );
};

export default FormInsertUpdateUser;
