import React, {Fragment, useEffect} from 'react';
import './deals-list-by-cause.css';
import {Link} from "react-router-dom";
import AddDeal from "../add-deal";
import {useSelector} from "react-redux";

const DealsListByCause = () => {
  const deals = useSelector(({deals}) => deals);
  return (
    <section className='deals-list-by-cause'>
      <h2>Deals List - grouped by cause</h2>
      <AddDeal/>
      {deals?.length > 0 && deals.map((dealsByCause, index) => {
        return (
          <div key={index} className='deals-with-cause-wrapper'>
            <p className='deal-cause'>{dealsByCause.cause}</p>
            <div className='deal-wrapper'>{dealsByCause.items.map((deal, index) =>
              <Fragment key={index}>
                <div className='deal'>
                  <Link to={`/deal/${deal.cause.name}/${deal.key}`}>{deal.title}</Link>
                  <span>{deal.price}</span>
                </div>
              </Fragment>
            )}</div>
          </div>
        )
      })}
    </section>
  )

}
export default DealsListByCause;