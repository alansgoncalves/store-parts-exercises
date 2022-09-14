import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PartsPage from "./pages/PartsPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} exact />
				<Route path="/store" element={<PartsPage />} exact />
			</Routes>
		</div>
	);
}

export default App;
