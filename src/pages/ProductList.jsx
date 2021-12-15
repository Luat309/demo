import { useEffect } from "react";
import { useState } from "react";

const ProductList = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            setProducts(data);
        })();
	}, []);

	// khong truyen dependenci thi moi lan rerender callback se dc goi lai
	// truyen [] thi callback chi chay 1 lan dau tien
	// truyen dependenci thi khi dependenci thay doi callback dc goi lai

	if (!user) {
		window.location.href = "/sign-in";
	} else if (user.user.id !== 1) {
		return "Ban khong co quyen truy cap vao khu vuc nay!";
	}

	return (
		<div>
			<ul>
				{products.map((product) => {
					return (
						<li>
							ID: {product?.id} __ Title: {product?.title} __ Img:{" "}
							{product?.img} __ Price: {product?.price} __ Desc:{" "}
							{product?.desc}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductList;
