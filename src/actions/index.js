export const searchRestaurants = (search) => ({
  type: "SEARCH_RESTAURANTS",
  search,
});

export const resetRestaurants = (reset) => ({
  type: "RESET_RESTAURANTS",
  reset,
});

export const changeCurrentPage = (page) => ({
  type: "CHANGE_PAGE",
  page,
});

export const changeSelection = (places) => ({
  type: "NEW_PAGE",
  places,
});
