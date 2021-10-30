import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link } from "react-router-dom";

const renderFooter = (name) => {
  return (
    <div>
      <Button
        label="Xóa"
        icon="pi pi-trash"
        // onClick={() => onHide(name)}
        className="p-button-text p-button-danger"
      />
      <Button
        label={
          <Link className="text-decoration-none" to="/admin/jobrequest/update">
            Cập nhật
          </Link>
        }
        icon="pi pi-check"
        // onClick={() => onHide(name)}
        className="p-button-help"
        autoFocus
      />
    </div>
  );
};

const JobRequestDetail = ({ isOpen, onHide, jobDetail }) => {
  return (
    <Dialog
      header="Thông tin chi tiết dự án"
      visible={isOpen}
      onHide={onHide}
      style={{ width: "80%" }}
      footer={renderFooter}
    >
      <table className="jobDetail">
        <tbody>
          <tr>
            <th>Tên dự án: </th>
            <td>{jobDetail?.title}</td>
          </tr>
          <tr>
            <th>Hạn tuyển dụng: </th>
            <td>{jobDetail?.deadline}</td>
          </tr>
          <tr>
            <th>Người yêu cầu:</th>
            <td>{jobDetail?.petitioner}</td>
          </tr>
          <tr>
            <th>Vị trí cần tuyển: </th>
            <td>{jobDetail?.position}</td>
          </tr>
          <tr>
            <th>Số lượng cần tuyển: </th>
            <td>{jobDetail?.amount}</td>
          </tr>
          <tr>
            <th>Mức lương:</th>
            <td>{jobDetail?.wage}</td>
          </tr>
          <tr>
            <th>Địa điểm làm việc:</th>
            <td>{jobDetail?.location}</td>
          </tr>
          <tr>
            <th>Thời gian làm việc:</th>
            <td>{jobDetail?.working_time}</td>
          </tr>
          <tr>
            <th>Mô tả dự án:</th>
            <td
              dangerouslySetInnerHTML={{ __html: jobDetail?.description }}
            ></td>
          </tr>
        </tbody>
      </table>
    </Dialog>
  );
};

export default JobRequestDetail;
