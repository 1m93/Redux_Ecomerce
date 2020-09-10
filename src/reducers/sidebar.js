const initialState = {
	allTypeLoading: false,
	allTypeError: null,
	allBrandLoading: false,
	allBrandError: null,
	allType: [],
	allBrand: [],
	brand: [],
	type: "",
	rate: "",
	from: "",
	to: "",
	brandSearch: "",
};

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_ALL_TYPE_BEGIN": {
			return {
				...state,
				allTypeLoading: true,
				allTypeError: null,
			};
		}
		case "FETCH_ALL_TYPE_SUCCESS": {
			return {
				...state,
				allTypeLoading: false,
				allType: action.payload,
			};
		}
		case "FETCH_ALL_TYPE_FAILURE": {
			return {
				...state,
				allTypeLoading: false,
				allTypeError: action.payload,
				allType: [],
			};
		}
		case "FETCH_ALL_BRAND_BEGIN": {
			return {
				...state,
				allBrandLoading: true,
				allBrandError: null,
			};
		}
		case "FETCH_ALL_BRAND_SUCCESS": {
			return {
				...state,
				allBrandLoading: false,
				allBrand: action.payload,
			};
		}
		case "FETCH_ALL_BRAND_FAILURE": {
			return {
				...state,
				allBrandLoading: false,
				allBrandError: action.payload,
				allBrand: [],
			};
		}
		case "SET_BRAND": {
			return {
				...state,
				brand: action.payload,
			};
		}
		case "SET_TYPE": {
			return {
				...state,
				type: action.payload,
			};
		}
		case "SET_RATE": {
			return {
				...state,
				rate: action.payload,
			};
		}
		case "SET_FROM": {
			return {
				...state,
				from: action.payload,
			};
		}
		case "SET_TO": {
			return {
				...state,
				to: action.payload,
			};
		}
		case "SET_BRAND_SEARCH": {
			return {
				...state,
				brandSearch: action.payload,
			};
		}
		case "RESET_FILTER": {
			return {
				...state,
				brand: [],
				type: "",
				rate: "",
				from: "",
				to: "",
				brandSearch: "",
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default sidebarReducer;
