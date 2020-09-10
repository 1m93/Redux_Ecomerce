import {
	fetchProductsBegin,
	fetchProductsSuccess,
	fetchProductsFailure,
	setNumOfPages,
	setCount,
} from "../../actions/products";

function fetchProducts(page, type, brand, rate, from, to, search, sort) {
	return (dispatch) => {
		dispatch(fetchProductsBegin());
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

		let urlForPages = url.replace(`_page=${page}&_limit=16`, "");

		Promise.all([
			fetch(url).then((res) => res.json()),
			fetch(urlForPages).then((res) => res.json()),
		])
			.then((allRessults) => {
				dispatch(fetchProductsSuccess(allRessults[0]));
				dispatch(setNumOfPages(Math.ceil(allRessults[1].length / 16)));
				dispatch(setCount(allRessults[1].length));
			})
			.catch((error) => {
				dispatch(fetchProductsFailure(error));
			});
	};
}

export default fetchProducts;
