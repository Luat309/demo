import InputTextController from "components/InputTextController";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddUser } from "redux/user/actionCreator";
import genElementsForm from "utils/genElementsForm";

const FormInsertUpdateUser = (props) => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();
	const dispatch = useDispatch();

	const status = [
		{ status: 1, name: "Hoạt động" },
		{ status: 0, name: "Ngừng hoạt động" },
	];
	const roles = [
		{ role: 0, name: "Trưởng phòng" },
		{ role: 1, name: "Trưởng phòng nhân sự" },
		{ role: 2, name: "HR" },
		{ role: 3, name: "Người phỏng vấn " },
	];

	const fields = [
		{
			label: "Mã nhân viên",
			name: "employee_code",
			type: "inputText",
			autoFocus: true,
		},
		{ label: "Tên nhân viên", name: "name", type: "inputText" },
		{ label: "Email", name: "email", type: "inputText" },
		// { label: "Mật khẩu", name: "password", type: "inputText" },
		{
			label: "Chức vụ",
			name: "role",
			type: "dropdown",
			options: roles,
			optionLabel: "name",
		},
		{
			label: "Trạng thái ",
			name: "status",
			type: "dropdown",
			options: status,
			optionLabel: "name",
		},
	];

	const onSubmit = (data) => {
		dispatch(
			AddUser({
				...data,
				status: data.status.status,
				roleIds: [data.role.role],
			})
		);
	};

	const formRender = genElementsForm(fields, control, errors);

	useEffect(() => {
		reset(props.data);
	}, [reset, props.data]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="p-fluid p-formgrid p-grid">
				{formRender}
				{props.actionType !== "UPDATE" ? (
					<>
						<InputTextController
							label="Mật khẩu"
							name="password"
							control={control}
							errors={errors}
						/>
						<div className="p-col-6"></div>
						<InputTextController
							label="Nhập lại mật khẩu"
							name="password_confirmation"
							control={control}
							errors={errors}
						/>
					</>
				) : (
					""
				)}
			</div>

			<Button
				style={{
					display: "block",
					margin: "0 auto",
					marginTop: "30px",
				}}
				type="submit"
				label={
					props.actionType === "INSERT"
						? "Thêm nhân viên"
						: "Xác nhận"
				}
			/>
		</form>
	);
};

export default FormInsertUpdateUser;
