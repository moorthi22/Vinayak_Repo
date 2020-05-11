import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const AddExpenses = props => (
  <Row>
    <Col xs="4">
      <Button color="success" onClick={() => props.setModal(true)}>
        +Income
      </Button>
    </Col>

    <Col xs="4">
      <Button color="warning">+Spending</Button>
    </Col>
    <Col />
  </Row>
);

const ExpenseModal = props => (
  <>
    <Modal isOpen={props.toggle}>
      <ModalHeader>Add Income</ModalHeader>
      <ModalBody />
      <ModalFooter>
        <Button color="success" onClick={() => {}}>
          Add Income
        </Button>{" "}
        <Button color="secondary" onClick={() => {}}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </>
);

function AddEditExpenses() {
  const [modal, setModal] = useState(false);

  return (
    <Container fluid>
      <AddExpenses setModal={setModal} />
      <ExpenseModal toggle={modal} />
    </Container>
  );
}

export default AddEditExpenses;
