import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import LoanFormModal from '../Modal/LoanFormModal/LoanFormModal';

import './LoanTile.css'; // Import custom CSS file for styling
interface contentType{
  title: string;
  description: string;
}
const LoanTile = ({ title, description }: contentType  ) => {
  const [ showModal, setShowModal ] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <>
      <div className="tile" onClick={handleShowModal}>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <LoanFormModal handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
};

export default LoanTile;
