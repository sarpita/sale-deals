import {useEffect, useReducer, useRef} from 'react';

const useFetch = (url) => {
  const cache = useRef({});
  const initialState = {
    loading: null,
    error: null,
    response: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'FETCHING':
        return {...initialState, loading: true};
      case 'FETCHED':
        return {...initialState, loading: false, response: action.payload};
      case 'FETCH_ERROR':
        return {...initialState, loading: false, error: action.payload};
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;
    const fetchData = async () => {
      dispatch({type: 'FETCHING'});
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({type: 'FETCHED', payload: data});
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({type: 'FETCHED', payload: data});
        } catch (error) {
          if (cancelRequest) return;
          dispatch({type: 'FETCH_ERROR', payload: error.message});
        }
      }
    };
    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);
  return state;
}
export default useFetch;