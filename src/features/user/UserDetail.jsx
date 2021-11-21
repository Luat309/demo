import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { ACCOUNT_STATUS } from "constants/app";

const UserDetail = () => {
  const { user } = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user);

  const fields = [
    { name: "name", label: "Họ tên", value: user?.name },
    {
      name: "employee_code",
      label: "Mã nhân viên",
      value: user?.employee_code,
    },
    { name: "email", label: "Email", value: user?.email },
    {
      name: "status",
      label: "Trạng thái",
      value: ACCOUNT_STATUS[user?.status],
    },
  ];

  return (
    <Fieldset legend="Thông tin tài khoản" toggleable>
      <div className="p-grid">
        {fields.map(({ name, label, value }) => (
          <div key={name} className="p-col-6">
            <label style={{ marginBottom: "5px", display: "block" }}>
              {label}
            </label>
            <InputText
              style={{ width: "100%" }}
              value={value || ""}
              readOnly={true}
            />
          </div>
        ))}
      </div>
    </Fieldset>
  );
};

export default UserDetail;
