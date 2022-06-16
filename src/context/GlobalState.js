import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios"

const initialState = {
  articles: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getArticles = async () => {
    const res = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=iPcfCU5LGrspYYTF3s8qxkTka6jGZL8B");
 
    dispatch({
      type: "GET_ARTICLES",
      payload: res.data.results
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        articles: state.articles,
        getArticles,
      }}
    >
      {children} 
    </GlobalContext.Provider>
  );
};