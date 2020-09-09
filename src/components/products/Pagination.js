import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Pagination({
	handlePageSelect,
	type,
	brand,
	from,
	to,
	search,
	page,
	rate,
	countResult,
}) {
	const [products, setProducts] = useState([]);
	const pages = [];

	useEffect(() => {
		let xhr = new XMLHttpRequest();
		let url = `http://localhost:3001/products?`;

		if (type) {
			url += `&type=${type}`;
		}
		if (brand.length > 0) {
			for (let i = 0; i < brand.length; i++) {
				url += `&brand=${brand[i]}`;
			}
		}
		if (rate) {
			url += `&rate_gte=${rate}`;
		}
		if (from) {
			url += `&price_gte=${from}`;
		}
		if (to) {
			url += `&price_lte=${to}`;
		}
		if (search) {
			url += `&q=${search}`;
		}

		xhr.open("GET", url);
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status === 200) {
				setProducts(JSON.parse(xhr.responseText));
			} else {
				console.log("HTTP error", xhr.status, xhr.statusText);
			}
		};
		xhr.send();
	}, [type, brand, rate, from, to, search]);

	countResult(products.length);

	const pageNum = Math.ceil(products.length / 16);
	for (let i = 1; i <= pageNum; i++) {
		pages.push(i);
	}

	return (
		<div className="products__pagination">
			<small
				style={page === 1 ? { color: "black" } : {}}
				onClick={() => {
					if (page > 1) {
						handlePageSelect(page - 1);
					}
				}}
			>
				<FontAwesomeIcon icon={faAngleLeft} /> Previous page
			</small>
			{pages.map((item) => (
				<small
					key={item}
					onClick={() => handlePageSelect(item)}
					style={page === item ? { color: "black" } : {}}
				>
					{item}
				</small>
			))}
			<small
				style={page === pageNum ? { color: "black" } : {}}
				onClick={() => {
					if (page < pageNum) {
						handlePageSelect(page + 1);
					}
				}}
			>
				Next page <FontAwesomeIcon icon={faAngleRight} />
			</small>
		</div>
	);
}

export default Pagination;
