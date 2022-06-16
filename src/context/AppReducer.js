const articles = (state, action) => {
    switch (action.type) {
      case "GET_ARTICLES":
        return {
          ...state,
          articles: action.payload,
        };
      default:
        return state;
    }
  };
  export default articles;