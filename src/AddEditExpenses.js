import React, { useState } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import ExpenseModal from "./ExpenseModal";

const AddExpenses = props => (
  <Row>
    <Col xs="4">
      <Button
        color="success"
        onClick={() => {
          props.setModal(true);
          props.setType("Income");
        }}
      >
        +Income
      </Button>
    </Col>

    <Col xs="4">
      <Button
        color="warning"
        onClick={() => {
          props.setModal(true);
          props.setType("Spending");
        }}
      >
        +Spending
      </Button>
    </Col>
    <Col />
  </Row>
);

function AddEditExpenses() {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <Container fluid>
      <AddExpenses setModal={setModal} setType={setType} />
      <ExpenseModal
        toggle={modal}
        setModal={setModal}
        type={type}
        date={date}
        setDate={setDate}
      />
    </Container>
  );
}

export default AddEditExpenses;
