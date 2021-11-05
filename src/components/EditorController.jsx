import { Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Editor } from "primereact/editor";
import { INVALID_FORM_MESSAGE } from "constants/app";

const EditorController = ({
  label,
  required = true,
  control,
  name,
  errors,
  ...rest
}) => {
  return (
    <div className="p-field p-col-12 p-md-12">
      <label htmlFor={name} className={classNames({ "p-error": errors.name })}>
        {label}
        {required && <span style={{ color: "#ff2020" }}>*</span>}
      </label>
      <div>
        {errors[name] && (
          <small className="p-error">{errors[name].message}</small>
        )}
      </div>
      <Controller
        name={name}
        control={control}
        rules={{ required: INVALID_FORM_MESSAGE.INVALID_EMPTY }}
        render={({ field, fieldState }) => (
          <Editor
            style={{ height: "250px" }}
            className={classNames({
              "p-invalid": fieldState.invalid,
            })}
            {...field}
            onTextChange={(e) => field.onChange(e.htmlValue)}
          />
        )}
      />
    </div>
  );
};

export default EditorController;
