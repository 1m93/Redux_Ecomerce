import React, { useEffect } from "react";
import Item from "../components/products/Item";
import Pagination from "../components/products/Pagination";
import { useSelector, useDispatch } from "react-redux";
import * as myFunction from "../actions/products";
import fetchProducts from "../components/products/fetchProducts";
import Loader from "react-loader-spinner";

function Products() {
	const products = useSelector((state) => state.products.products);
	const count = useSelector((state) => state.products.count);
	const type = useSelector((state) => state.sidebar.type);
	const brand = useSelector((state) => state.sidebar.brand);
	const rate = useSelector((state) => state.sidebar.rate);
	const from = useSelector((state) => state.sidebar.from);
	const to = useSelector((state) => state.sidebar.to);
	const search = useSelector((state) => state.navbar.search);
	const sort = useSelector((state) => state.products.sort);
	const page = useSelector((state) => state.products.page);
	const loading = useSelector((state) => state.products.loading);
	const error = useSelector((state) => state.products.state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts(page, type, brand, rate, from, to, search, sort));
	}, [page, type, brand, rate, from, to, search, sort, dispatch]);

	return (
		<div className="products">
			{loading ? (
				<div className="loading">
					<Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
				</div>
			) : error ? (
				<h1 className="error">{error}</h1>
			) : (
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
					{count > 0 ? (
						<div>
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
			)}
		</div>
	);
}

export default Products;
