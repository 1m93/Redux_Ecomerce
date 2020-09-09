import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setAllProducts, setCount, setPage } from "../../actions/products";

function Pagination() {
	const allProducts = useSelector((state) => state.products.allProducts);
	const type = useSelector((state) => state.sidebar.type);
	const brand = useSelector((state) => state.sidebar.brand);
	const rate = useSelector((state) => state.sidebar.rate);
	const from = useSelector((state) => state.sidebar.from);
	const to = useSelector((state) => state.sidebar.to);
	const search = useSelector((state) => state.navbar.search);
	const page = useSelector((state) => state.products.page);
	const pages = [];
	const dispatch = useDispatch();

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
				dispatch(setAllProducts(JSON.parse(xhr.responseText)));
			} else {
				console.log("HTTP error", xhr.status, xhr.statusText);
			}
		};
		xhr.send();
	}, [type, brand, rate, from, to, search]);

	dispatch(setCount(allProducts.length))

	const pageNum = Math.ceil(allProducts.length / 16);
	for (let i = 1; i <= pageNum; i++) {
		pages.push(i);
	}

	const handlePageSelect = (value) => {
		dispatch(setPage(value))
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
