import React from "react";
import Navbar from "./containers/Navbar";
import SideBar from "./containers/SideBar";
import Products from "./containers/Products";
import "./sass/style.sass";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<SideBar />
				<Products />
			</main>
		</div>
	);
}

export default App;
