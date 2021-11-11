import PermissionButton from "components/PermissionButton";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const JobRequestDetail = ({
  isOpen,
  onHide,
  jobDetail,
  handleClickUpdate,
  handleDelete,
}) => {
  const renderFooter = (name) => {
    return (
      <div>
        <PermissionButton
          name="deleteJobRequest"
          label="Xóa"
          icon="pi pi-trash"
          onClick={() => handleDelete(jobDetail)}
          className="p-button-text p-button-danger"
        />
        <PermissionButton
          name="updateJobRequest"
          label={"Cập nhật"}
          icon="pi pi-check"
          onClick={() => handleClickUpdate(jobDetail)}
          className="p-button-help"
          autoFocus
        />
      </div>
    );
  };

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
