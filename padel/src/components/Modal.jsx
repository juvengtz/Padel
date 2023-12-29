import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) =>  isOpen ? (
    <div className="modal">
        <div className="modal-header">
            <h4>{title}</h4>
            <button onClick={onClose}>X</button>
        </div>
        <div className="modal-body">{children}</div>
    </div>
) : null;

export default Modal;