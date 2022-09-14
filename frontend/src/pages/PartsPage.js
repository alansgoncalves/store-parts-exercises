import React from "react";
import { useLocation } from "react-router-dom";

const PartsPage = () => {
	const { state } = useLocation();
	return (
		<div>
			<h1>PartsPage</h1>
			name: {state.name}
			type: {state.type}
			price: {state.price}
		</div>
	);
};

export default PartsPage;
