import {
	fetchAllTypeBegin,
	fetchAllTypeSuccess,
	fetchAllTypeFailure,
} from "../../actions/sidebar";

function fetchAllType() {
	return (dispatch) => {
		dispatch(fetchAllTypeBegin());

		fetch("http://localhost:3001/types")
			.then((res) => res.json())
			.then(
				(result) => {
					dispatch(fetchAllTypeSuccess(result));
				},
				(error) => {
					dispatch(fetchAllTypeFailure(error));
				}
			);
	};
}

export default fetchAllType;
