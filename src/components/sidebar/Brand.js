import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBrand, setBrandSearch } from "../../actions/sidebar";
import fetchAllBrand from "./fetchAllBrand";
import Loader from "react-loader-spinner";

function Brand() {
	const allBrand = useSelector((state) => state.sidebar.allBrand);
	const allBrandLoading = useSelector((state) => state.sidebar.allBrandLoading);
	const allBrandError = useSelector((state) => state.sidebar.allBrandError);
	const brand = useSelector((state) => state.sidebar.brand);
	const brandSearch = useSelector((state) => state.sidebar.brandSearch);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllBrand(brandSearch));
	}, [brandSearch, dispatch]);

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
			{allBrandLoading ? (
				<div className="loading">
					<Loader type="ThreeDots" color="#00BFFF" height={25} width={25} />
				</div>
			) : allBrandError ? (
				<p className="error">{allBrandError}</p>
			) : (
				<div>
					{allBrand.map((item) => (
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
			)}
		</div>
	);
}

export default Brand;
