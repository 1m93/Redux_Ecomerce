import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBrand, setBrandSearch } from "../../actions/sidebar";

function Brand() {
	const [displayBrands, setDisplayBrands] = useState([]);
	const brand = useSelector((state) => state.sidebar.brand);
	const brandSearch = useSelector((state) => state.sidebar.brandSearch);
	const dispatch = useDispatch();

	useEffect(() => {
		let xhr = new XMLHttpRequest();
		let url = "http://localhost:3001/brands?_limit=5";

		if (brandSearch) {
			url += `&name_like=${brandSearch}`;
		}

		xhr.open("GET", url);
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status === 200) {
				setDisplayBrands(JSON.parse(xhr.responseText));
			} else {
				console.log("HTTP error", xhr.status, xhr.statusText);
			}
		};
		xhr.send();
	}, [brandSearch]);

	const handleBrandSelect = (value) => {
		dispatch(setBrand(value));
	};

	return (
		<div className="brand">
			<h5 className="brand__title">Brand</h5>
			<input
				className="brand__search"
				placeholder="Search for other..."
				onChange={(value) => {
					dispatch(setBrandSearch(value.target.value));
				}}
			/>
			{displayBrands.map((item) => (
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
