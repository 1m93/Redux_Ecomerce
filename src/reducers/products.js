const initialState = {
	products: [],
	allProducts: [],
	count: "",
	page: 1,
	sort: "",
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_PRODUCTS": {
			return {
				...state,
				products: action.payload,
			};
		}
		case "SET_ALL_PRODUCTS": {
			return {
				...state,
				allProducts: action.payload,
			};
		}
		case "SET_COUNT": {
			return {
				...state,
				count: action.payload,
			}
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
