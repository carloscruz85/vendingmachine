import React from 'react'
import './index.scss';
import Glass from '../../assets/img/glass.png'

const Modal = (props) => {
    return (
        <div className="modal-container">
            <div className="modal">
                <img src={Glass} alt="glass" />
                {props.msg}
            </div>
        </div>
    )
}

export default Modal
