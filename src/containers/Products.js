import React, { useEffect } from "react";
import Item from "../components/products/Item";
import Pagination from "../components/products/Pagination";
import { useSelector, useDispatch } from "react-redux";
import * as myFunction from "../actions/products";

function Products() {
	const products = useSelector((state) => state.products.products);
	const type = useSelector((state) => state.sidebar.type);
	const brand = useSelector((state) => state.sidebar.brand);
	const rate = useSelector((state) => state.sidebar.rate);
	const from = useSelector((state) => state.sidebar.from);
	const to = useSelector((state) => state.sidebar.to);
	const search = useSelector((state) => state.navbar.search);
	const sort = useSelector((state) => state.products.sort);
	const page = useSelector((state) => state.products.page);
	const count = useSelector((state) => state.products.count);
	const dispatch = useDispatch();

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
				dispatch(myFunction.setProducts(JSON.parse(xhr.responseText)));
			} else {
				console.log("HTTP error", xhr.status, xhr.statusText);
			}
		};
		xhr.send();
	}, [page, type, brand, rate, from, to, search, sort]);

	return (
		<div className="products">
			{products.length > 0 ? (
				<div>
					<div className="products__head">
						<p className="products__head-results">{count} results found</p>
						<div className="products__head-sort">
							<label>Sort by</label>
							<select
								value={sort}
								onChange={(value) => {
									dispatch(myFunction.setSort(value.target.value));
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
					<Pagination />
				</div>
			) : (
				<p className="products__error">NO RESULT FOUND</p>
			)}
		</div>
	);
}

export default Products;
