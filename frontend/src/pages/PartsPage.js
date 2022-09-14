import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PartsPage = () => {
	const { state } = useLocation();
	return (
		<div>
			<div className="parts-cont">
				<h2 className="title-main">Store Parts</h2>
				<Link to="/">
					<Button colorScheme="teal" size="sm">
						Back
					</Button>
				</Link>
			</div>
			<div className="parts">
				name: {state.name}
				<br />
				type: {state.type}
				<br />
				price: {state.price}
			</div>
		</div>
	);
};

export default PartsPage;
