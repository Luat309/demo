import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidate } from "redux/candidate/action";
import moment from "moment";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const CandidateList = () => {
  const items = [{ label: "Ứng viên" }, { label: " Danh sách ứng viên" }];
  const dispath = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const [detailCandidate, setDetailCandidate] = useState();
  const { cadidates } = useSelector((state) => state.cadidate);
  const [job, setJob] = useState();
  console.log(cadidates);

  useEffect(() => {
    dispath(getCandidate());
  }, [dispath]);

  const experienceBodyTemplate = (rowData) => {
    return <p>{rowData.experience} năm</p>;
  };
  const dateBodyTemplate = (rowData) => {
    return moment(rowData.created_at).format("MM/DD/YYYY");
  };
  const jobBodyTemplate = (rowData) => {
    return moment(rowData.created_at).format("MM/DD/YYYY");
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <div>
        <i
          className="pi pi-eye"
          style={{ color: "blue", padding: "0 10px" }}
          onClick={() => handleDetailCandidate(rowData)}
        ></i>
        <i className="pi pi-pencil" style={{ color: "orange" }}></i>
        <i
          className="pi pi-trash"
          style={{ color: "red", padding: "0 10px" }}
        ></i>
      </div>
    );
  };

  const handleDetailCandidate = (value) => {
    setShowMessage(true);
    setDetailCandidate(value);
  };

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        style={{ width: "80%" }}
      >
        <div className="p-d-flex p-ai-center p-dir-col p-px-3 ">
          <table className="table_detail">
            <tr>
              <th>Tên: </th>
              <td>{detailCandidate?.name}</td>
            </tr>
            <tr>
              <th>Số điện thoại: </th>
              <td>{detailCandidate?.phone}</td>
            </tr>
            <tr>
              <th>Nguồn: </th>
              <td> {detailCandidate?.source}</td>
            </tr>
            <tr>
              <th>Kinh nghiệm: </th>
              <td>{detailCandidate?.experience}</td>
            </tr>
            <tr>
              <th>CV: </th>
              <td>
                <embed src={detailCandidate?.cv} type="" />
              </td>
            </tr>
            <tr>
              <th>Trường </th>
              <td> {detailCandidate?.school}</td>
            </tr>
            <tr>
              <th>Trạng thái</th>
              <td>{detailCandidate?.status}</td>
            </tr>
            <tr>
              <th>Dự án</th>
              <td>{detailCandidate?.job_id}</td>
            </tr>
          </table>
        </div>
      </Dialog>

      <CustomBreadCrumb items={items} />
      <div>
        <h4>
          Thêm nhiều thành viên
          <br /> bằng bảng Excel
        </h4>
      </div>
      <div className="input-search"></div>

      <CustomDataTable value={cadidates}>
        <Column field="name" header="Tên " style={{ width: "20%" }}></Column>
        <Column
          field="experience"
          header="Kinh nghiệm"
          body={experienceBodyTemplate}
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="created_at"
          header="Ngày Tạo"
          body={dateBodyTemplate}
        ></Column>
        <Column field="job_id" header="Dự án"></Column>
        <Column field="status" header="Trạng thái"></Column>
        <Column
          field=""
          header="Hành động"
          body={actionBodyTemplate}
          style={{ width: "20%" }}
        ></Column>
      </CustomDataTable>
    </>
  );
};

export default CandidateList;
