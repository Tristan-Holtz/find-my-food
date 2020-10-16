const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_RESTAURANTS":
      return action.search;
    case "RESET_RESTAURANTS":
      return action.reset;
    default:
      return state;
  }
};

export default restaurantReducer;
