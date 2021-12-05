import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import genElementsForm from "utils/genElementsForm";

const ForgotPasswordEmail = () => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const fields = [
		{
			name: "email",
			label: "Nhập email quên mật khẩu",
			type: "inputText",
		},
	];
	const formRender = genElementsForm(fields, control, errors);
	const onHandleSubmit = async (data) => {
		reset();
	};
	return (
		<form onSubmit={handleSubmit(onHandleSubmit)}>
			<div className="p-fluid p-formgrid p-grid flex-direction align-items">
				{formRender}
			</div>
			<Button
				style={{
					display: "block",
					margin: "0 auto",
					marginTop: "30px",
				}}
				type="submit"
				label="Lưu"
			/>
		</form>
	);
};

export default ForgotPasswordEmail;
