const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_RESTAURANTS":
      return action.search;
    default:
      return state;
  }
};

export default restaurantReducer;
