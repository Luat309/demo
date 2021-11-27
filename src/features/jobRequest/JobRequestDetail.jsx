import classNames from "classnames";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getJobRequestById } from "redux/jobRequest/selector";

const JobRequestDetail = (props) => {
  const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Chi tiết yêu cầu" }];
  const statuses = {
    0: "TỪ CHỐI",
    1: "ĐÃ DUYỆT",
    2: "HẾT HẠN",
    "null": "CHỜ DUYỆT"
  }
  const { id } = useParams();
  const jobDetail = useSelector(getJobRequestById(id));

  const classLabel = classNames(
    "label",
    "absolute",
    {"approval": jobDetail?.status === 1},
    {"reject": jobDetail?.status === 0},
    {"waiting": jobDetail?.status === null}
  )

  // console.log(jobDetail, "ABC");

  if (!jobDetail) {
    return "Không tìm thấy yêu cầu tuyển dụng.";
  }

  return (
    <>
      <CustomBreadCrumb items={items} />

      <div style={{ overflow: "hidden" }} className="card relative">
        <div className={classLabel}>
          {statuses[jobDetail?.status]}
        </div>
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
              <td>{jobDetail?.petitioner?.name}</td>
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
      </div>
    </>
  );
};

export default JobRequestDetail;
