import { Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";
import { INVALID_FORM_MESSAGE } from "constants/app";

const InputNumberController = ({
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
        rules={{
          required: INVALID_FORM_MESSAGE.INVALID_EMPTY,
          min: { value: 1, message: "Giá trị nhập vào phải lớn hơn 0" },
        }}
        render={({ field, fieldState }) => (
          <InputNumber
            id={field.name}
            {...field}
            onChange={(e) => field.onChange(e.value)}
            className={classNames({ "p-invalid": fieldState.invalid })}
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

export default InputNumberController;
