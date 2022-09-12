import React, { useEffect, useState } from "react";

const MainPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const items = await fetch("http://localhost:8081/store/parts");
			const data = await items.json();
			setProducts(data);
		})();
	}, []);

	return (
		<div>
			<ul>
				{products.map(({ name, price, type }) => (
					<li>
						{name}
						{type}
						{price}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MainPage;
