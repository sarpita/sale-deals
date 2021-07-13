import React, {Fragment, useEffect} from 'react';
import useFetch from "../hooks";
import DealsListByCause from "../deals-list-by-cause";
import DealsSummary from "../deals-summary";
import './home.css';
import {useDispatch} from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const {loading, response, error} = useFetch('https://bakesaleforgood.com/api/deals');
  useEffect(() => {
    function mapDealsByCause(deals) {
      return deals.reduce((acc, deal) => {
        const cause = deal.cause.name;
        const isDealExist = acc.find((dealsByCause) => {
          return dealsByCause.cause === cause
        })
        if (isDealExist) {
          const index = acc.findIndex(deal => deal.cause === cause);
          acc[index].items.push(deal);
          acc[index].total = acc[index].total + deal.price;
        } else {
          acc.push({cause: cause, items: [deal], total: deal.price})
        }
        return acc;
      }, [])
    }

    if (!loading && !error && response?.length > 0) {
      dispatch({type: 'SET_DEALS', payload: mapDealsByCause(response)});
    }
  }, [loading, response, error])
  return (
    <div data-testid='home-page-container' className='home-page-container'>
      {loading && <div>loading data...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && <Fragment>
        <DealsSummary/>
        <DealsListByCause/>
      </Fragment>
      }
    </div>
  )
}
export default Home;