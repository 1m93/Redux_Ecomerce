import {
	fetchAllBrandBegin,
	fetchAllBrandSuccess,
	fetchAllBrandFailure,
} from "../../actions/sidebar";

function fetchAllBrand(brandSearch) {
	return (dispatch) => {
		dispatch(fetchAllBrandBegin());

		let url = "http://localhost:3001/brands?_limit=5";

		if (brandSearch) {
			url += `&name_like=${brandSearch}`;
		}

		fetch(url)
			.then((res) => res.json())
			.then(
				(result) => {
					dispatch(fetchAllBrandSuccess(result));
				},
				(error) => {
					dispatch(fetchAllBrandFailure(error));
				}
			);
	};
}

export default fetchAllBrand;
