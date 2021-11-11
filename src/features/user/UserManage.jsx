import { useEffect, useMemo, useState } from "react";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import FormDetailUser from "./FormDetailUser";
import TreeUser from "./Tree";
import UserGrid from "./UserGrid";
import { Dialog } from "primereact/dialog";
import FormInsertUpdateUser from "./FormInsertUpdateUser";
import { fakeApiGetUser } from "./fakeApi";

const UserList = () => {
  const [detailUser, setDetailUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [titleDialog, setTitleDialog] = useState(null);
  const [bodyDialog, setBodyDialog] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [role, setRole] = useState(999);

  const items = [{ label: "Quản lý ứng dụng" }, { label: "Quản lý User" }];

  useEffect(() => {
    (async () => {
      const res = await fakeApiGetUser();
      setDataTable(res);
      // setDetailUser(res[0]);
    })();
  }, []);

  const handleOpenDialog = (data = {}, actionType = "INSERT") => {
    setVisible(true);
    setBodyDialog(<FormInsertUpdateUser data={data} actionType={actionType} />);

    if (actionType === "INSERT") {
      setTitleDialog("Thêm nhân viên");
    } else if (actionType === "UPDATE") {
      setTitleDialog("Cập nhật thông tin");
    }
  };

  const dataFilter = useMemo(() => {
    setDetailUser(null);

    if (role === 999) return dataTable;

    return dataTable.filter((item) => item.role === role);
  }, [dataTable, role]);

  return (
    <>
      <CustomBreadCrumb items={items} />

      <Dialog
        header={titleDialog}
        visible={visible}
        style={{ width: "60%" }}
        onHide={() => setVisible(false)}
      >
        {bodyDialog}
      </Dialog>

      <div className="card">
        <div className="p-grid">
          <div className="p-col-3">
            <TreeUser callback={(role) => setRole(role)} />
          </div>
          <div className="p-col-9">
            <FormDetailUser detailUser={detailUser || dataFilter?.[0]} />
            <UserGrid
              onOpenDialog={handleOpenDialog}
              dataTable={dataFilter}
              callback={(data) => setDetailUser(data)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
