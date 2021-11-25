import { Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { INVALID_FORM_MESSAGE } from "constants/app";

const InputTextController = ({
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
        rules={
          name === "email"
            ? {
                required: INVALID_FORM_MESSAGE.INVALID_EMPTY,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }
            : { required: INVALID_FORM_MESSAGE.INVALID_EMPTY, minLength: 5 }
        }
        render={({ field, fieldState }) => (
          <InputText
            id={field.name}
            className={classNames({ "p-invalid": fieldState.invalid })}
            {...field}
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

export default InputTextController;
