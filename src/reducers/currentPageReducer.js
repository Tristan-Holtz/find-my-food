const currentPageReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_PAGE":
      return action.places;
    default:
      return state;
  }
};

export default currentPageReducer;
