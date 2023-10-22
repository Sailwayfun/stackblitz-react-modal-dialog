import React from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import './style.css';
import Modal from './Modal';
const portal = document.getElementById('portal');

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  function handleModalOpen(e) {
    setModalOpen(true);
  }
  function handleModalClose(e) {
    setModalOpen(false);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={handleModalOpen}>Show Dialog</button>
      {createPortal(
        <Modal onModalClose={handleModalClose} modalOpen={modalOpen} />,
        portal
      )}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
