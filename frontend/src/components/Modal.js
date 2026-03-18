import React from "react";
import imagen from "../img/convocatoria.png";
import pdf_Asamblea from "../data/Asamblea_Marzo_2026.pdf";
import "./css/Modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* Botón cerrar (X) */}
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Imagen */}
        <img src={imagen} alt="Entrega" className="modal-image" />

        {/* Botón abrir documento */}
        <a href={pdf_Asamblea} target="_blank" rel="noreferrer">
          <button type="button" className="modal-btn-doc">
            Conocer más
          </button>
        </a>

      </div>
    </div>
  );
};

export default Modal;