import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { POSITION } from "constants/app";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getListUsers } from "redux/user/actionCreator";

const UserDetail = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const [userI, setUser] = useState();

  useEffect(() => {
    dispatch(getListUsers());
    const { user } = JSON.parse(localStorage.getItem("currentUser"));
    const findUser = data.find((item) => item.id === user.id);
    setUser(findUser);
  }, []);

  const fields = [
    { name: "name", label: "Họ tên", value: userI?.name },
    {
      name: "employee_code",
      label: "Mã nhân viên",
      value: userI?.employee_code,
    },
    { name: "email", label: "Email", value: userI?.email },

    {
      name: "role",
      label: "Chức vụ",
      value: POSITION[userI?.roles[0].id],
    },
  ];

  return (
    <Fieldset legend="Thông tin tài khoản" toggleable>
      <form>
        <div className="p-grid">
          {fields.map(({ name, label, value }) => {
            return (
              <>
                <div key={name} className="p-col-6">
                  <label style={{ marginBottom: "5px", display: "block" }}>
                    {label}
                  </label>
                  <InputText
                    disabled
                    style={{ width: "100%" }}
                    defaultValue={value || ""}
                  />
                </div>
              </>
            );
          })}
        </div>
      </form>
    </Fieldset>
  );
};

export default UserDetail;
