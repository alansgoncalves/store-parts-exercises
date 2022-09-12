import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";

const MainPage = () => {
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		(async () => {
			const items = await fetch("http://localhost:8081/store/parts");
			const data = await items.json();
			setProducts(data);
		})();
	}, []);

	return (
		<div>
			<Input
				placeholder="Search"
				w="30%"
				m="auto"
				onChange={(event) => {
					setSearchTerm(event.target.value);
				}}
			/>

			<ul>
				{products
					.filter((value) => {
						if (searchTerm === "") {
							return value;
						} else if (
							value.name.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							return value;
						}
						return false;
					})
					.map(({ name, price, type }) => (
						<li key={name}>
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
