import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import './details.css';

const Details = () => {
  const {dealKey, cause} = useParams();
  const deal = useSelector(state => state.deals.find((dealsByCause) => {
    return dealsByCause.cause === cause
  })).items.find((deal) => deal.key === dealKey)


  return (
    <div data-testid='details-page-container'>
      <h2>{deal.title}</h2>
      <p>Price: Rs {deal.price}</p>
      <p>Cause: {deal.cause.name}</p>
      <p className='deal-images'>{deal.media.map((url, index) => {
        return <img src={url} alt={deal.title}/>
      })}</p>
    </div>
  )
}
export default Details;