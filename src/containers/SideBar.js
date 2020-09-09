import React from "react";
import Type from "../components/sidebar/Type";
import Brand from "../components/sidebar/Brand";
import Price from "../components/sidebar/Price";
import Rate from "../components/sidebar/Rate";

function SideBar({
	handleTypeSelect,
	handleBrandSelect,
	handleRateSelect,
	handleFromSelect,
	handleToSelect,
	handleClearFilter,
	from,
	to,
	type,
	brand,
	rate,
}) {
	return (
		<div className="sidebar">
			{from || to || type || brand.length > 0 || rate ? (
				<button onClick={() => handleClearFilter()}>Clear all filter</button>
			) : (
				``
			)}
			<Type handleTypeSelect={handleTypeSelect} />
			<h4>Refine by</h4>
			<Brand handleBrandSelect={handleBrandSelect} brand={brand} />
			<Rate handleRateSelect={handleRateSelect} rate={rate} />
			<Price
				handleFromSelect={handleFromSelect}
				handleToSelect={handleToSelect}
				from={from}
				to={to}
			/>
			<p className="sidebar__foot">Data courtesy of Best Buy</p>
		</div>
	);
}

export default SideBar;
