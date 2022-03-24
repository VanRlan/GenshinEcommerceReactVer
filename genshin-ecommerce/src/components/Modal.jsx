// import React from 'react'
// import ReactDom from 'react-dom'

import React from 'react';

function Modal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
        <button onClick={() => {closeModal(false);}}> X </button>
        </div>
        <div className='modalTitle'>
          <h2> Are you sure u want to continue? </h2>
        </div>
        <div className='modalBody'>
          <p> The next page is awesome</p>
        </div>
        <div className='modalFooter'>
          <button onClick={() => {
            closeModal(false);
            }} id="cancelBtn">
               Cancel 
          </button>
          <button> Continue </button>
        </div>
      </div>
    </div>
  ); 
}

export default Modal;

// const MODAL_STYLES = {
//     postition: 'fixed',
//     top: '50%',
//     left: '50%',
//     // transform: 'translate(-50%, -50%)',
//     backgroundColor: 'silver',
//     padding: '50px',
//     zIndex: 1000
// }

// const OVERLAY_STLES = {
//     postition: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, .7)',
//     zIndex: 1000
// }

// export default function Modal({ open, children, onClose }) {
//   if (!open) return null

//   return ReactDom.createPortal(
//     <>
//     <div style={OVERLAY_STLES} />
//     <div style={MODAL_STYLES}>
//         <button onClick={onClose}>Close Modal</button>
//         {children}
//     </div>
//     </>,
//     document.getElementById('portal')
//   )
// }
