import React, { useEffect, useMemo, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const MainPage = () => {
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState(""); // state to search for terms
	const [currentProdType, setCurrentProdType] = useState("all"); // state to filter by type

	useEffect(() => {
		(async () => {
			const items = await fetch("http://localhost:8081/store/parts");
			const data = await items.json();
			setProducts(data);
		})();
	}, []);

	const handleSelect = (e) => {
		// Type selected at dropdown
		setCurrentProdType(e.target.value);
	};

	// function responsible for filtering the products
	// according to selected type
	const filterProducts = () => {
		if (currentProdType === "all") return products;
		return products.filter(({ type }) => type === currentProdType);
	};

	const filteredProducts = useMemo(filterProducts, [products, currentProdType]);

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
			<Select onChange={handleSelect} w="30%" m="auto">
				<option value="all">All</option>
				<option value="Keyboard">Keyboard</option>
				<option value="Monitor">Monitor</option>
				<option value="Mouse">Mouse</option>
				<option value="Mousepad">Mousepad</option>
			</Select>

			<ul>
				{filteredProducts
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
						<li>
							<span>{name}</span>
							<span>{type}</span>
							<span>{price}</span>
						</li>
					))}
			</ul>
		</div>
	);
};

export default MainPage;
