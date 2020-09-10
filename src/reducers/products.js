const initialState = {
	products: [],
	loading: false,
	error: null,
	numOfPages:"",
	count: "",
	page: 1,
	sort: "",
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS_BEGIN": {
			return {
				...state,
				loading: true,
				error: null,
			};
		}
		case "FETCH_PRODUCTS_SUCCESS": {
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		}
		case "FETCH_PRODUCTS_FAILURE": {
			return {
				...state,
				loading: false,
				error: action.payload,
				products: [],
			}
		}
		case "SET_NUM_OF_PAGES": {
			return {
				...state,
				numOfPages: action.payload,
			};
		}
		case "SET_COUNT": {
			return {
				...state,
				count: action.payload,
			};
		}
		case "SET_PAGE": {
			return {
				...state,
				page: action.payload,
			};
		}
		case "SET_SORT": {
			return {
				...state,
				sort: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default productsReducer;
