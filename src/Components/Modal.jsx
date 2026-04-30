import React from 'react'

const Modal = ({ image, overview, title, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className='modal-img-wrapper'>
                <img src={image} alt={title} />
            </div>
            <div className='modal-text'>
                <h2>{title}</h2>
                <p>{overview || "No description available."}</p>
                <button className='modal-btn' onClick={onClose}>Close</button>
            </div> 
      </div>
    </div>
  );
};

export default Modal
