import React from 'react'
import './index.scss';

const Modal = (props) => {
    return (
        <div className="modal-container">
            <div className="modal">
                {props.msg}
            </div>
        </div>
    )
}

export default Modal
