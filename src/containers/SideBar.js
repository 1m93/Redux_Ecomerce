import React from "react";
import Type from "../components/sidebar/Type";
import Brand from "../components/sidebar/Brand";
import Price from "../components/sidebar/Price";
import Rate from "../components/sidebar/Rate";
import { useSelector, useDispatch } from "react-redux";
import { resetFilter } from "../actions/sidebar";

function SideBar() {
	const from = useSelector((state) => state.sidebar.from);
	const to = useSelector((state) => state.sidebar.to);
	const type = useSelector((state) => state.sidebar.type);
	const brand = useSelector((state) => state.sidebar.brand);
	const rate = useSelector((state) => state.sidebar.rate);
	const dispatch = useDispatch();

	return (
		<div className="sidebar">
			{from || to || type || brand.length > 0 || rate ? (
				<button onClick={() => dispatch(resetFilter())}>Clear all filter</button>
			) : (
				``
			)}
			<Type />
			<h4>Refine by</h4>
			<Brand />
			<Rate />
			<Price />
			<p className="sidebar__foot">Data courtesy of Best Buy</p>
		</div>
	);
}

export default SideBar;
