import React from 'react';
import './deals-summary.css';
import {useSelector} from "react-redux";

const DealsSummary = () => {
  const deals = useSelector(({deals}) => deals);
  return (
    <section className='deals-summary-by-cause'>
      <h2>Deals summary - by total amount</h2>
      {deals?.length > 0 && deals.map((dealsByCause, index) => {
        return (
          <div key={index} className='deals-with-cause-wrapper'>
            <p className='deal-cause'>{dealsByCause.cause}</p>
            <span className='deal-count'>{dealsByCause.items.length} deals</span>
            <p className='deal-total'>{dealsByCause.total}</p>
          </div>
        )
      })}
    </section>
  )

}
export default DealsSummary;