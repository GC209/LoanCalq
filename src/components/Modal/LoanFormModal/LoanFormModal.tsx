import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './LoanFormModal.css';

const LoanFormModal = ({ handleCloseModal } : any ) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Perform form submission or other actions here
    handleCloseModal();
  };

  return (
    <div className="modal-content">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="principal">
          <Form.Label>Principal</Form.Label>
          <Form.Control type="number" placeholder="Enter Principal" required />
        </Form.Group>

        <Form.Group controlId="interest">
          <Form.Label>Interest</Form.Label>
          <Form.Control type="number" placeholder="Enter Interest" required />
        </Form.Group>

        <Form.Group controlId="interestRate">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control type="number" placeholder="Enter Interest Rate" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoanFormModal;
