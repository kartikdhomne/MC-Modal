import React, { useEffect } from "react";
import "./App.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </header>
        <main className="modal-content">{children}</main>
        <footer className="modal-footer">
          <button onClick={onClose} className="modal-close-btn">
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
