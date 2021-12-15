import Admin from "pages/Admin";
import ProductAdd from "pages/ProductAdd";
import ProductList from "pages/ProductList";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />

				<Route path="/admin" element={<Admin />} />

                <Route path="/products" element={<ProductList />} />
                <Route path="/product/add" element={<ProductAdd />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
