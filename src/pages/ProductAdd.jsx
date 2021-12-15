import { useForm } from "react-hook-form";

const ProductAdd = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const user = JSON.parse(localStorage.getItem("user"));

	if (!user) {
		window.location.href = "/sign-in";
	} else if (user.user.id !== 1) {
		return "Ban khong co quyen truy cap vao khu vuc nay!";
	}

    const onSubmit = async (data) => {
		const res = await fetch('http://localhost:5000/products', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		});
		
		await res.json();

        alert("Them sp thanh cong")
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="title">Title</label>
					<input
						id="title"
						type="text"
						{...register("title", {
							required: "Khong duoc de trong!",
						})}
					/>
					<span>{errors?.title && errors.title?.message}</span>
				</div>
				<div>
					<label htmlFor="img">Img</label>
					<input
						id="img"
						{...register("img", {
							required: "Khong duoc de trong!",
						})}
					/>
					<span>{errors?.img && errors.img?.message}</span>
				</div>
                <div>
					<label htmlFor="price">Price</label>
					<input
						id="price"
						{...register("price", {
							required: "Khong duoc de trong!",
						})}
					/>
					<span>{errors?.price && errors.price?.message}</span>
				</div>
                <div>
					<label htmlFor="desc">Desc</label>
					<input
						id="desc"
						{...register("desc", {
							required: "Khong duoc de trong!",
						})}
					/>
					<span>{errors?.desc && errors.desc?.message}</span>
				</div>

				<button type="submit">Them san pham</button>
			</form>
		</div>
	);
};

export default ProductAdd;
