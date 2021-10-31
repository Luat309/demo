import { useState } from "react";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import JobRequestService from "services/JobRequestService";
import { classNames } from "primereact/utils";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
// import { InputNumber } from "primereact/inputnumber";
import { Chips } from 'primereact/chips';
import { useForm, Controller } from "react-hook-form";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

const items = [{ label: "Lịch phỏng vấn" }, { label: "Tạo lịch phỏng vấn" }];

const CreateForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  const service = new JobRequestService();

  const defaultValues = {
    title: "",
    time_start: "",
    time_end: "",
    round_no: 0,
    receiver: "",
    job_id: "",
    position: "",
    // petitioner: "",
    // wage: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    console.log("DATA", data);
    // await service.createRecruitment(data);

    // setShowMessage(true);

    // reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
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
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Thành công!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Bạn đã tạo yêu cầu tuyển dụng thành công!
          </p>
        </div>
      </Dialog>

      <CustomBreadCrumb items={items} />

      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-6">
              <label
                htmlFor="time_start"
                className={classNames({ "p-error": errors.name })}
              >
                Thời gian bắt đầu*
              </label>
              <Controller
                name="time_start"
                control={control}
                rules={{ required: "Không được để trống trường này!" }}
                render={({ field, fieldState }) => (
                  <Calendar
                    id={field.name}
                    className={classNames({
                      "p-invalid": fieldState.invalid,
                    })}
                    dateFormat="dd/mm/yy"
                    // value={date8}
                    // onChange={(e) => setDate8(e.value)}
                    {...field}
                    showTime
                    showSeconds
                  />
                )}
              />
              {getFormErrorMessage("time_start")}
            </div>

            <div className="p-field p-col-12 p-md-6">
              <label
                htmlFor="title"
                className={classNames({ "p-error": errors.name })}
              >
                Title*
              </label>
              <Controller
                name="title"
                control={control}
                rules={{ required: "Không được để trống trường này!" }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    className={classNames({ "p-invalid": fieldState.invalid })}
                  />
                )}
              />
              {getFormErrorMessage("title")}
            </div>

            <div className="p-field p-col-12 p-md-6">
              <label
                htmlFor="time_end"
                className={classNames({ "p-error": errors.name })}
              >
                Thời gian kết thúc*
              </label>
              <Controller
                name="time_end"
                control={control}
                rules={{ required: "Không được để trống trường này!" }}
                render={({ field, fieldState }) => (
                  <Calendar
                    id={field.name}
                    className={classNames({
                      "p-invalid": fieldState.invalid,
                    })}
                    dateFormat="dd/mm/yy"
                    // value={date8}
                    // onChange={(e) => setDate8(e.value)}
                    {...field}
                    showTime
                    showSeconds
                  />
                )}
              />
              {getFormErrorMessage("time_end")}
            </div>

            <div className="p-field p-col-12 p-md-6">
              <div className="p-field">
                <label
                  htmlFor="receiver"
                  className={classNames({ "p-error": errors.name })}
                >
                  Người nhận*
                </label>
                <Controller
                  name="receiver"
                  control={control}
                  rules={{ required: "Không được để trống trường này!" }}
                  render={({ field, fieldState }) => (
                    <Chips
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                {getFormErrorMessage("receiver")}
              </div>

              <div className="p-field">
                <label
                  htmlFor="position"
                  className={classNames({ "p-error": errors.name })}
                >
                  Địa điểm*
                </label>
                <Controller
                  name="position"
                  control={control}
                  rules={{ required: "Không được để trống trường này!" }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                {getFormErrorMessage("position")}
              </div>
            </div>
          </div>
          <Button type="submit" label="Thêm kế hoạch" />
        </form>
      </div>
    </>
  );
};

export default CreateForm;
