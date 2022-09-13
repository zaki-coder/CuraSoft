import React, { useContext, useEffect, useReducer } from "react";

import reducer from "./reducer";

const API_ENDPOINT = "https://test.cura-go.de/web/v3/go.vital/protocol";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const bearer = "Bearer " + process.env.bearer_token;
  fetch(url, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: bearer,
      "X-FP-API-KEY": "iphone", 
      "Content-Type": "application/json",
    },
  })
    .then((responseJson) => {
      var items = JSON.parse(responseJson._bodyInit);
    })
    .catch((error) =>
      this.setState({
        isLoading: false,
        message: "Something bad happened " + error,
      })
    );





  const fetchItems = async (url) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
          "X-FP-API-KEY": "iphone",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({
        type: 'SET_ITEMS',
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(initialState.hits)
  
  const handleSearch = (query) => {
    dispatch({ type: 'HANDLE_SEARCH', payload: query });
  };
  const handlePage = (value) => {
    dispatch({ type: 'HANDLE_PAGE', payload: value });
  };
  useEffect(() => {
    fetchItems(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
