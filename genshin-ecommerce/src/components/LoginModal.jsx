// import React from 'react'
// import ReactDom from 'react-dom'

import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
          <div className="modalTitle">
            <h2> Log in </h2>
          </div>
          <form>
            <div className="modalBody">
              <input type="text" id="email" placeholder="Username/Email" />
            </div>
            <div className="modalBody2">
              <input type="text" id="email" placeholder="Password" />
            </div>
            <div className="login-button">
              <button type="submit"> Log In </button>
            </div>
          </form>
          <div className="register-bar">
            <a href="#">Forgot Password?</a>
            <a className="to-register"> Register Now </a>
          </div>
          <div className="social-media-login">
            <div className="login-tip"> Or log in using social media</div>
            <div className="third-party-login third-party-icon">
              <div className="third-party-login-item">
                <img
                  src="../img/google-icon.png"
                  alt="googleIcon"
                  className="login-icon"
                />
              </div>
              <div className="third-party-login-item">
                <img
                  src="../img/apple-icon.png"
                  alt="googleIcon"
                  className="login-icon"
                />
              </div>
              <div className="third-party-login-item">
                <img
                  src="../img/facebook-icon.png"
                  alt="googleIcon"
                  className="login-icon"
                />
              </div>
              <div className="third-party-login-item">
                <img
                  src="../img/twitter-icon.png"
                  alt="googleIcon"
                  className="login-icon"
                />
            </div>
          </div>
        </div>
        {/* <div className='modalFooter'>
          <button onClick={() => {
            closeModal(false);
            }} id="cancelBtn">
               Cancel 
          </button>
          <button> Continue </button>
        </div> */}
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
