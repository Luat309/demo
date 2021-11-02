import { Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import { INVALID_FORM_MESSAGE } from "constants/app";
import formatTime from "utils/formatTime";

const minDate = new Date();

const CalenderController = ({
  label,
  required = true,
  control,
  name,
  errors,
  ...rest
}) => {
  return (
    <div className="p-field p-col-12 p-md-6">
      <label htmlFor={name} className={classNames({ "p-error": errors.name })}>
        {label}
        {required && <span style={{ color: "#ff2020" }}>*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required: INVALID_FORM_MESSAGE.INVALID_EMPTY }}
        render={({ field, fieldState }) => (
          <Calendar
            id={field.name}
            className={classNames({ "p-invalid": fieldState.invalid })}
            dateFormat="dd/mm/yy"
            minDate={minDate}
            {...field}
            onChange={(e) => {
              return field.onChange(formatTime.formatShortsDate(e.value));
            }}
            {...rest}
          />
        )}
      />
      {errors[name] && (
        <small className="p-error">{errors[name].message}</small>
      )}
    </div>
  );
};

export default CalenderController;
