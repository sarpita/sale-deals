import React, {useRef, useState} from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AddDeal = ({dealCauseKeys}) => {
  const deals = useSelector(({deals}) => deals);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedCause, setSelectedCause] = useState('');
  const titleRef = useRef('null');
  const priceRef = useRef('null');
  const dispatch = useDispatch();

  function addDealClick() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function createDeal() {
    const id = uuidv4();
    dispatch({
      type: 'ADD_DEAL',
      payload: {key: id, price: priceRef.current.value, title: titleRef.current.value, cause: selectedCause}
    });
    setIsOpen(false);
  }

  function onCauseSelect(e) {
    setSelectedCause(e.target.value);
  }

  return (
    <div style={{textAlign: 'right'}}>
      <button className='add-deal-btn' onClick={addDealClick}>New Deal</button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="add deal"
      >
        <div style={{width: '400px'}}>
          <button
            style={{
              position: 'absolute',
              right: '1em',
              top: '1em'
            }}
            onClick={closeModal}
          >close
          </button>
          <h2>Add deal</h2>
          <p>Select cause</p>
          <select onChange={onCauseSelect}>
            <option>Select cause</option>
            {deals.map(({cause}, index) => {
              return (<option key={index}>{cause}</option>)
            })}
          </select>
          <div>
            <label htmlFor='title'>enter title</label>
            <input ref={titleRef} id='title' type='text'/>
          </div>
          <div>
            <label htmlFor='price'>enter price</label>
            <input ref={priceRef} id='price' type='text'/>
          </div>
          <div>
            <button className='primary-btn' onClick={createDeal}>Create Deal</button>
          </div>
        </div>
      </Modal>
    </div>
  )

}
export default AddDeal;