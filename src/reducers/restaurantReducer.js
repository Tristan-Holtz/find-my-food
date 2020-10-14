const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_RESTAURANTS":
      return [...state, action.search];
    default:
      return state;
  }
};

export default restaurantReducer;
