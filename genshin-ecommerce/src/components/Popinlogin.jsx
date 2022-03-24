import React, { useState } from 'react';
import Modal from "./Modal";
// import Modal from './Modal'

// const BUTTON_WRAPPER_STYLES = {
//     position: 'relative',
//     zIndex: 1
// }

// const OTHER_CONTENT_STYLES = {
//     position: 'relative',
//     zIndex: 2,
//     backgroundColor: 'red',
//     padding: '10px'
// }

const PopUpLogin = () => {
    // document.querySelector("#show-login").addEventListener("click", function(){
    //     document.querySelector(".popup").classList.add("active");
    // });
    // document.querySelector(".popup .close-btn").addEventListener("click", function(){
    //     document.querySelector(".popup").classList.remove("active");
    // });

    // const [isOpen, setIsOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
        <div className='Modal'>
            <h5>Hey, click on the button to open the modal</h5>
            <button className='openModalBtn' onClick={() => {setOpenModal(true);}}>Open</button>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
        {/* <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log */}
    {/* //     ('clicked')}>
    //         <button onClick={() => setIsOpen(true)}>Open Modal</button>

    //         <Modal open={isOpen} onClose={() => setIsOpen(false)}>
    //             Fancy Modal
    //         </Modal>
    //     </div> */}

    {/* //     <div style={OTHER_CONTENT_STYLES}>Other Content</div> */}
        {/* <div className='center'>
            <button id='show-login'>Login</button>
        </div>
        <div className='popup'>
            <div className='close-btn'>&times;</div>
            <div className='form'>
                <h2>Log In</h2>
                <div className='form-element'>
                    <label for="email">Email</label>
                    <input type="text" id='email' placeholder='Enter email'/>
                </div>
                <div className='form-element'>
                    <label for="password">Password</label>
                    <input type="password" id='password' placeholder='Enter password'/>
                </div>
                <div className='form-elemet'>
                    <input type="checkbox" id='remember-me'/>
                    <label for="remember-me">Remember Me</label>
                </div>
                <div className='form-elemet'>
                    <button className='popUpSignIn'>Sign in</button>
                </div>
                <div className='form-elemet'>
                    <a href="#">Forgot password</a>
                </div>
            </div>
        </div> */}
        </>
    );
}

export default PopUpLogin;