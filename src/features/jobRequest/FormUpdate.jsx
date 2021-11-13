import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import { updateJobRequest } from "redux/jobRequest/actionCreator";
import { getJobRequestById } from "redux/jobRequest/selector";
import formatTime from "utils/formatTime";
import PermissionButton from "components/PermissionButton";
import genElementsForm from "utils/genElementsForm";

const items = [{ label: "Yêu cầu tuyển dụng" }, { label: "Cập nhật yêu cầu" }];

const FormUpdateJobRequest = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const jobDetail = useSelector(getJobRequestById(id));
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      ...jobDetail,
      deadline: new Date(Date.parse(jobDetail.deadline)),
      created_at: undefined,
      updated_at: undefined,
      status: undefined,
      reason: undefined,
    });
  }, [reset, jobDetail]);

  const fields = [
    { label: "Tên dự án", name: "title", type: "inputText", autoFocus: true },
    { label: "Hạn tuyển dụng", name: "deadline", type: "calender" },
    { label: "Vị trí tuyển dụng", name: "position", type: "inputText" },
    { label: "Số lượng tuyển dụng", name: "amount", type: "inputNumber" },
    { label: "Địa điểm làm việc", name: "location", type: "inputText" },
    { label: "Thời gian làm việc", name: "working_time", type: "inputText" },
    { label: "Mức lương", name: "wage", type: "inputText" },
    { label: "Đặc điểm của dự án", name: "description", type: "editor" },
  ];

  const formRender = genElementsForm(fields, control, errors);

  const onSubmit = async (data) => {
    dispatch(
      updateJobRequest({
        ...data,
        deadline: formatTime.formatShortsDate(data?.deadline),
      })
    );

    history.push("/admin/jobrequest");
  };

  return (
    <>
      <CustomBreadCrumb items={items} />
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-fluid p-formgrid p-grid">{formRender}</div>
          <PermissionButton
            name="updateJobRequest"
            type="submit"
            label="Cập nhật yêu cầu"
          />
        </form>
      </div>
    </>
  );
};

export default FormUpdateJobRequest;
