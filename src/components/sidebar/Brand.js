import React, { useState, useEffect } from "react";
import "../../sass/style.sass";

function Brand({ handleBrandSelect, brand }) {
	const [brands, setBrands] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		let xhr = new XMLHttpRequest();
		let url = "http://localhost:3001/brands?_limit=5";

		if (search) {
			url += `&name_like=${search}`;
		}

		xhr.open("GET", url);
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status === 200) {
				setBrands(JSON.parse(xhr.responseText));
			} else {
				console.log("HTTP error", xhr.status, xhr.statusText);
			}
		};
		xhr.send();
	}, [search]);

	return (
		<div className="brand">
			<h5 className="brand__title">Brand</h5>
			<input
				className="brand__search"
				placeholder="Search for other..."
				onChange={(value) => {
					setSearch(value.target.value);
				}}
			/>
			{brands.map((item) => (
				<div className="brand__name" key={item.id}>
					<input
						type="checkbox"
						id={`brand${item.id}`}
						checked={brand.includes(item.name) ? true : false}
						onChange={(value) => {
							if (!value.target.checked) {
								handleBrandSelect(
									brand.filter((name) => {
										return name !== item.name;
									})
								);
							} else {
								handleBrandSelect(brand.concat(item.name));
							}
						}}
					/>
					<label htmlFor={`brand${item.id}`}>{item.name}</label>
				</div>
			))}
		</div>
	);
}

export default Brand;
