import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = async (data) => {
		const res = await fetch('http://localhost:5000/signup', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		});
		
		// console.log(res);
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="email"></label>
					<input
						id="email"
						type="text"
						{...register("email", {
							required: "Khong duoc de trong!",
							pattern: {
								value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
								message: 'Email khong hop le!'
							}
						})}
					/>
					<span>{errors?.email && errors.email?.message}</span>
				</div>
				<div>
					<label htmlFor="password"></label>
					<input
						id="password"
						type="password"
						{...register("password", {
							required: "Khong duoc de trong!",
						})}
					/>
					<span>{errors?.password && errors.password?.message}</span>
				</div>

				<button type="submit">Sign Up</button>

				<p>
					<Link to="/sign-in">Da co TK, dang nhap</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
