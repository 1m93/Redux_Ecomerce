export const fetchProductsBegin = () => {
	return {
		type: "FETCH_PRODUCTS_BEGIN",
	};
};

export const fetchProductsSuccess = (value) => {
	return {
		type: "FETCH_PRODUCTS_SUCCESS",
		payload: value,
	};
};

export const fetchProductsFailure = (value) => {
	return {
		type: "FETCH_PRODUCTS_FAILURE",
		payload: value,
	};
};

export const setNumOfPages = (value) => {
	return {
		type: "SET_NUM_OF_PAGES",
		payload: value,
	};
};

export const setCount = (value) => {
	return {
		type: "SET_COUNT",
		payload: value,
	};
};

export const setPage = (value) => {
	return {
		type: "SET_PAGE",
		payload: value,
	};
};

export const setSort = (value) => {
	return {
		type: "SET_SORT",
		payload: value,
	};
};
