export const setProducts = (value) => {
	return {
		type: "SET_PRODUCTS",
		payload: value,
	};
};

export const setAllProducts = (value) => {
    return {
        type: "SET_ALL_PRODUCTS",
        payload: value,
    }
}

export const setCount = (value) => {
	return {
		type: "SET_COUNT",
		payload: value,
	}
}

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
