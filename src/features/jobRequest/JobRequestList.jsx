import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import JobRequestDetail from "./JobRequestDetail";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";

import { fetchJobRequest } from "redux/jobRequest/actionCreator";
import { getStatusJobRequest, getJobRequest } from "redux/jobRequest/selector";
import { APPROVAL_STATUS, STATUS_REQUEST } from "constants/app";
import formatTime from "utils/formatTime";
import moment from "moment";
import { compareTimeFromTo } from "utils/compareTime";

const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Danh sách yêu cầu" }];

const cols = [
  // { field: "description", header: "Dac diem cua du an" },
  { field: "title", header: "Tên dự án", width: "250px" },
  { field: "deadline", header: "Hạn tuyển", width: "120px" },
  { field: "position", header: "Vị trí tuyển dụng", width: "250px" },
  { field: "amount", header: "Số lượng tuyển", width: "150px" },
  { field: "petitioner", header: "Người yêu cầu", width: "150px" },
  { field: "status", header: "Trạng thái", width: "100px" },
  { field: "action", header: <i className="pi pi-cog" />, width: "150px" },
];

const JobRequestList = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatusJobRequest);
  const data = useSelector(getJobRequest);
  const history = useHistory();
  const [jobDetail, setJobDetail] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState([]);
  const [deadLine, setDeadLine] = useState([]);

  const cities = [
    { id: 0, name: "Từ chối", code: "TU_CHOI", severity: "danger" },
    { id: 1, name: "Đã duyệt", code: "DA_DUYET", severity: "success" },
    { id: 2, name: "Hết hạn", code: "HET_HAN", severity: "danger" },
    { id: 3, name: "Chờ duyệt", code: "MOI_TAO", severity: "primary" },
  ];

  useEffect(() => {
    if (status === STATUS_REQUEST.IDLE) {
      dispatch(fetchJobRequest());
    }
  }, [dispatch, status]);

  const handleClickView = (data) => {
    setJobDetail(data);
    setIsOpen(true);
  };

  const handleClickUpdate = (data) => {
    history.push(`/admin/jobrequest/edit/${data.id}`);
  };

  const handleDelete = (data) => {
    setIsOpen(!isOpen);
    console.log(data.id);
  };

  const genFormatTimeCol = (data) => {
    return formatTime.formatShortDate(data.deadline);
  };

  const genStatusCol = (data) => {
    switch (data.status) {
      case APPROVAL_STATUS.TU_CHOI:
        return <Tag className="p-mr-2" severity="danger" value="Từ chối" />;
      case APPROVAL_STATUS.DA_DUYET:
        return <Tag className="p-mr-2" severity="success" value=" Đã duyệt" />;
      case APPROVAL_STATUS.HET_HAN:
        return <Tag className="p-mr-2" severity="danger" value="Hết hạn" />;
      case APPROVAL_STATUS.CHO_DUYET:
        return <Tag className="p-mr-2" value="Chờ duyệt" />;
      default:
        break;
    }
  };

  const genActionCol = (data) => {
    return (
      <>
        <Button
          onClick={() => handleClickView(data)}
          className="p-button-rounded p-button-text p-button-info"
          icon="pi pi-eye"
        />
        <Button
          onClick={() => handleClickUpdate(data)}
          className="p-button-rounded p-button-text p-button-help"
          icon="pi pi-pencil"
        />
        <Button
          onClick={() => handleDelete(data)}
          className="p-button-rounded p-button-text p-button-danger"
          icon="pi pi-trash"
        />
      </>
    );
  };

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

  const columns = cols.map(({ field, header, width }) => {
    switch (field) {
      case "action":
        return (
          <Column
            key={field}
            header={header}
            body={genActionCol}
            style={{
              textAlign: "center",
              width: width,
            }}
          />
        );

      case "deadline":
        return (
          <Column
            key={field}
            header={header}
            body={genFormatTimeCol}
            style={{
              width: width,
            }}
          />
        );

      case "status":
        return (
          <Column
            key={field}
            header={header}
            body={genStatusCol}
            style={{
              width: width,
            }}
          />
        );

      default:
        return (
          <Column
            key={field}
            header={header}
            field={field}
            style={{
              width: width,
            }}
          />
        );
    }
  });

  const dataFilter = useMemo(() => {
    const statusSelected = statusFilter.map((item) => item.id);

    if (statusSelected.length === 0 && deadLine.length === 0) {
      return data;
    }

    return (
      Array.isArray(data) &&
      data.filter((item) => {
        return (
          (statusSelected.length === 0 ||
            statusSelected.indexOf(item.status) !== -1) &&
          (deadLine.length === 0 ||
            compareTimeFromTo(item.deadline, deadLine[0], deadLine[1]))
        );
      })
    );
  }, [deadLine, statusFilter, data]);

  return (
    <>
      <JobRequestDetail
        jobDetail={jobDetail}
        isOpen={isOpen}
        onHide={() => setIsOpen(false)}
        handleClickUpdate={handleClickUpdate}
        handleDelete={handleDelete}
      />

      <CustomBreadCrumb items={items} />

      <div className="filter">
        <Button
          icon="pi pi-plus"
          className="p-button-raised"
          label="Thêm mới"
          onClick={() => history.push("/admin/jobrequest/create")}
        />
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
            placeholder="Hạn tuyển"
            readOnlyInput
          />
          <MultiSelect
            value={statusFilter}
            itemTemplate={statusTemplate}
            selectedItemTemplate={selectedStatusTemplate}
            options={cities}
            onChange={(e) => setStatusFilter(e.value)}
            optionLabel="name"
            placeholder="Trạng thái"
            display="chip"
          />
        </div>
      </div>

      {status === STATUS_REQUEST.LOADING && data}
      {status === STATUS_REQUEST.SUCCEEDED && (
        <div className="card">
          <CustomDataTable
            selectionMode="single"
            onSelectionChange={(data) => {
              setJobDetail(data.value);
              setIsOpen((prevState) => !prevState);
            }}
            dataTable={dataFilter}
            showSearch={true}
          >
            {columns}
          </CustomDataTable>
        </div>
      )}
    </>
  );
};

export default JobRequestList;
