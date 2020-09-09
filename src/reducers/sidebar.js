const initialState = {
	type: "",
	brand: [],
	rate: "",
	from: "",
	to: "",
	brandSearch: "",
};

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_TYPE": {
			return {
				...state,
				type: action.payload,
			};
		}
		case "SET_BRAND": {
			return {
				...state,
				brand: action.payload,
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
				...initialState,
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
