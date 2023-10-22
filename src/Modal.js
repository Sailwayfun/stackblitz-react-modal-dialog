import React from 'react';
import { useRef } from 'react';
const Modal = ({ onModalClose, modalOpen }) => {
  const modalRef = useRef();
  modalOpen ? modalRef.current?.showModal() : modalRef.current?.close();
  console.log(modalRef.current);
  return (
    <dialog ref={modalRef}>
      <div class="modal-wrap">
        <span>Please don't leave</span>
        <div className="buttons">
          <button onClick={onModalClose}>Close</button>
          <button onClick={onModalClose}>Cancel</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
