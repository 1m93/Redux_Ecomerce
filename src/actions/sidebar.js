export const fetchAllTypeBegin = () => {
	return {
		type: "FETCH_ALL_TYPE_BEGIN",
	};
};

export const fetchAllTypeSuccess = (value) => {
	return {
		type: "FETCH_ALL_TYPE_SUCCESS",
		payload: value,
	};
};

export const fetchAllTypeFailure = (value) => {
	return {
		type: "FETCH_ALL_TYPE_FAILURE",
		payload: value,
	};
};

export const fetchAllBrandBegin = () => {
	return {
		type: "FETCH_ALL_BRAND_BEGIN",
	};
};

export const fetchAllBrandSuccess = (value) => {
	return {
		type: "FETCH_ALL_BRAND_SUCCESS",
		payload: value,
	};
};

export const fetchAllBrandFailure = (value) => {
	return {
		type: "FETCH_ALL_BRAND_FAILURE",
		payload: value,
	};
};

export const setBrand = (value) => {
	return {
		type: "SET_BRAND",
		payload: value,
	};
};

export const setType = (value) => {
	return {
		type: "SET_TYPE",
		payload: value,
	};
};

export const setRate = (value) => {
	return {
		type: "SET_RATE",
		payload: value,
	};
};

export const setFrom = (value) => {
	return {
		type: "SET_FROM",
		payload: value,
	};
};

export const setTo = (value) => {
	return {
		type: "SET_TO",
		payload: value,
	};
};

export const setBrandSearch = (value) => {
	return {
		type: "SET_BRAND_SEARCH",
		payload: value,
	};
};

export const resetFilter = () => {
	return {
		type: "RESET_FILTER",
	};
};
