import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../actions/sidebar";
import fetchAllType from "./fetchAllType";
import Loader from "react-loader-spinner";

function Type() {
	const allType = useSelector((state) => state.sidebar.allType);
	const allTypeLoading = useSelector((state) => state.sidebar.allTypeLoading);
	const allTypeError = useSelector((state) => state.sidebar.allTypeError);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllType());
	}, [dispatch]);

	return (
		<div className="type">
			{allTypeLoading ? (
				<div className="loading">
					<Loader type="ThreeDots" color="#00BFFF" height={25} width={25} />
				</div>
			) : allTypeError ? (
				<p className="error">{allTypeError}</p>
			) : (
				<div>
					<h4 className="type__title">Show result for</h4>
					{allType.map((item) => (
						<div className="type__name" key={item.id}>
							<small onClick={() => dispatch(setType(item.name))}>
								<FontAwesomeIcon icon={faAngleRight} /> {item.title}
							</small>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Type;
