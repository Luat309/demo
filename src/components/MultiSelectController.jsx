import { Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { MultiSelect } from "primereact/multiselect";
import { INVALID_FORM_MESSAGE } from "constants/app";

const MultiSelectController = ({
  label,
  required = true,
  options = [],
  filter = true,
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
          <MultiSelect
            id={field.name}
            className={classNames({ "p-invalid": fieldState.invalid })}
            options={options}
            optionLabel="title"
            filter={filter}
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

export default MultiSelectController;
