import React, { useState, useEffect } from "react";
import Item from "../components/products/Item";
import Pagination from "../components/products/Pagination";

function Products({ type, brand, rate, from, to, search }) {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [result, setResult] = useState("");
	const [sort, setSort] = useState("");

	useEffect(() => {
		document.title = "Ecomerce";

		let xhr = new XMLHttpRequest();
		let url = `http://localhost:3001/products?_page=${page}&_limit=16`;

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
		if (sort) {
			url += `&_sort=price&_order=${sort}`;
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
	}, [page, type, brand, rate, from, to, search, sort]);

	const countResult = (value) => {
		setResult(value);
	};

	const handlePageSelect = (value) => {
		setPage(value);
	};

	return (
		<div className="products">
			{products.length > 0 ? (
				<div>
					<div className="products__head">
						<p className="products__head-results">{result} results found</p>
						<div className="products__head-sort">
							<label>Sort by</label>
							<select
								value={sort}
								onChange={(value) => {
									setSort(value.target.value);
								}}
							>
								<option value="">Featured</option>
								<option value="asc">Price asc.</option>
								<option value="desc">Price desc.</option>
							</select>
						</div>
					</div>
					<div className="products__list">
						{products.map((item) => (
							<Item product={item} key={item.id} />
						))}
					</div>
					<Pagination
						handlePageSelect={handlePageSelect}
						type={type}
						brand={brand}
						from={from}
						to={to}
						search={search}
						page={page}
						countResult={countResult}
						rate={rate}
					/>
				</div>
			) : (
				<p className="products__error">NO RESULT FOUND</p>
			)}
		</div>
	);
}

export default Products;
