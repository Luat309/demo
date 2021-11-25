import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import { Column } from "primereact/column";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidate } from "redux/candidate/action";
import moment from "moment";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { getJobRequest } from "redux/jobRequest/selector";
import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { useHistory } from "react-router";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { compareTimeFromTo } from "utils/compareTime";
import "./style.scss";

const CandidateList = () => {
  const items = [{ label: "Ứng viên" }, { label: " Danh sách ứng viên" }];
  const dispath = useDispatch();
  const history = useHistory();
  const [showMessage, setShowMessage] = useState(false);
  const [detailCandidate, setDetailCandidate] = useState();
  const { cadidate } = useSelector((state) => state.cadidate);
  const [filter, setFilter] = useState(false);
  const job = useSelector(getJobRequest);
  const [deadLine, setDeadLine] = useState([]);
  const [statusFilter, setStatusFilter] = useState([]);
  const [titlejob, setTitleJob] = useState();

  useEffect(() => {
    dispath(getCandidate());
    dispath(fetchJobRequest());
  }, [dispath]);

  const statuses = [
    { id: 0, name: "Vòng CV", code: "Vòng CV" },
    { id: 3, name: "Sắp xếp PV", code: "Sắp xếp PV" },
    { id: 4, name: "PV Pass", code: "PV Pass" },
    { id: 5, name: "PV Faild", code: "PV Faild" },
  ];

  const experienceBodyTemplate = (rowData) => {
    return <p>{rowData.experience} năm</p>;
  };
  const dateBodyTemplate = (rowData) => {
    return moment(rowData.created_at).format("MM/DD/YYYY");
  };
  const jobBodyTemplate = (rowData) => {
    return job.map
      ? job.map((item) => {
          if (item.id === rowData.job_id) {
            setTitleJob(item.title);
            return <p>{item.title}</p>;
          }
          return "";
        })
      : "";
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <div>
        <i
          className="pi pi-eye"
          style={{ color: "blue", padding: "0 15px", fontSize: "20px" }}
          onClick={() => handleDetailCandidate(rowData)}
        ></i>
        <i
          className="pi pi-pencil"
          style={{ color: "orange", fontSize: "20px" }}
          onClick={() => history.push(`/admin/candidate/edit/${rowData.id}`)}
        ></i>
      </div>
    );
  };

  const handleDetailCandidate = (value) => {
    setShowMessage(true);
    setDetailCandidate(value);
  };
  console.log(detailCandidate, "");

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

  const statusTemplate = (option) => {
    return (
      <Tag className="p-mr-2" severity={option.severity} value={option.name} />
    );
  };
  const selectedStatusTemplate = (option) => {
    if (option) {
      return (
        <Tag
          className="p-mr-2"
          severity={option.severity}
          value={option.name}
        />
      );
    }

    return "Trạng thái";
  };

  const dataFilter = useMemo(() => {
    const statusSelected = statusFilter.map((item) => item.id);

    if (statusSelected.length === 0 && deadLine.length === 0) {
      return cadidate;
    }

    return (
      Array.isArray(cadidate) &&
      cadidate.filter((item) => {
        return (
          (statusSelected.length === 0 ||
            statusSelected.indexOf(item.status) !== -1) &&
          (deadLine.length === 0 ||
            compareTimeFromTo(item.deadline, deadLine[0], deadLine[1]))
        );
      })
    );
  }, [deadLine, statusFilter, cadidate]);

  console.log(dataFilter, "hihiyhghf");

  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        style={{ width: "80%" }}
      >
        <div className="container">
          <div className="flex ">
            <img
              src={`http://35.240.196.153/storage/images/candidate/${detailCandidate?.image}`}
              alt=""
              width="250px"
              className="mx-5"
            />

            <div>
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
                    <a
                      href={detailCandidate?.cv}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Đường dẫn CV
                    </a>
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
                  <td>{titlejob}</td>
                </tr>
              </table>
            </div>
          </div>
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
      <Button
        icon="pi pi-filter"
        className="p-button-raised p-button-help"
        label="Bộ lọc"
        onClick={() => setFilter(!filter)}
      />

      <div className={`card filter_element ${!filter && "hide"}`}>
        <Calendar
          id="range"
          className="mr-1"
          value={deadLine}
          showButtonBar
          dateFormat="dd/mm/yy"
          onChange={(e) => setDeadLine(e.value)}
          onClearButtonClick={() => setDeadLine([])}
          selectionMode="range"
          placeholder="Ngày tạo"
          readOnlyInput
        />
        <MultiSelect
          className="mr-1"
          value={statusFilter}
          itemTemplate={statusTemplate}
          selectedItemTemplate={selectedStatusTemplate}
          options={statuses}
          onChange={(e) => setStatusFilter(e.value)}
          optionLabel="name"
          placeholder="Trạng thái"
          display="chip"
        />
      </div>

      <div className="card">
        <CustomDataTable
          dataTable={dataFilter}
          showSearch={true}
          selectionMode="single"
        >
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
          <Column field="job_id" header="Dự án" body={jobBodyTemplate}></Column>
          <Column field="status" header="Trạng thái"></Column>
          <Column
            field=""
            header="Hành động"
            body={actionBodyTemplate}
            style={{ width: "20%" }}
          ></Column>
        </CustomDataTable>
      </div>
    </>
  );
};

export default CandidateList;
