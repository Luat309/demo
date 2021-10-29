import React, { useEffect } from "react";
import "./login.css";
import logo from "images/logo.png";
import { Controller, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useHistory } from "react-router";
// import { isLogin } from "../../services/authenticate";

const isLogin = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return Boolean(currentUser?.email && currentUser?.accessToken);
};

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    if (isLogin()) {
      history.push("/admin/dashboard");
    }
  }, [history]);

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = ({ email, password }) => {
    if (email === "admin123@gmail.com" && password === "abc123!@#") {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          email,
          accessToken:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ",
        })
      );
    } else {
      alert("Sai tài khoản hoặc mật khẩu, vui lòng thử lại!");
      return;
    }

    history.push("/admin/dashboard");

    reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  return (
    <div className="login">
      <div className="p-d-flex p-jc-center">
        <div className="card">
          <h5 className="p-text-center">
            <img src={logo} alt="SSKPI" />
          </h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="p-field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Không được để trống.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email không hợp lệ. E.g. example@email.com",
                    },
                  }}
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
                <label
                  htmlFor="email"
                  className={classNames({ "p-error": !!errors.email })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Không được để trống." }}
                  render={({ field, fieldState }) => (
                    <Password
                      id={field.name}
                      {...field}
                      toggleMask
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="password"
                  className={classNames({ "p-error": errors.password })}
                >
                  Password*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>

            <Button type="submit" label="Đăng nhập" className="p-mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
