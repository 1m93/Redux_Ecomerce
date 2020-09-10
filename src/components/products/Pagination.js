import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../actions/products";

function Pagination() {
	const numOfPages = useSelector((state) => state.products.numOfPages);
	const page = useSelector((state) => state.products.page);
	const pages = [];
	const dispatch = useDispatch();

	for (let i = 1; i <= numOfPages; i++) {
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
				style={page === numOfPages ? { color: "black" } : {}}
				onClick={() => {
					if (page < numOfPages) {
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
