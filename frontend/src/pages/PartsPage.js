import React, { useEffect } from "react";

const PartsPage = () => {
	useEffect(() => {
		(async () => {
			const items = await fetch("http://localhost:8081/store/part-types");
			const data = await items.json();
			console.log(data);
		})();
	}, []);

	return <div>PartsPage</div>;
};

export default PartsPage;
