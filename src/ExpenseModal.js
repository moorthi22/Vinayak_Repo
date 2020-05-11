import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import WalletForm from "./WalletForm";

const walletDetails = details => {
  console.log("details", details);
};
function ExpenseModal(props) {
  return (
    <>
      <Modal isOpen={props.toggle}>
        <ModalHeader>Add {props.type}</ModalHeader>
        <ModalBody>
          <WalletForm
            date={props.date}
            setDate={props.setDate}
            walletDetails={walletDetails}
          />
        </ModalBody>
        <ModalFooter className="mx-auto">
          <Button
            color={props.type === "Income" ? "success" : "warning"}
            onClick={() => props.addWallet}
          >
            Add {props.type}
          </Button>{" "}
          <Button color="secondary" onClick={() => props.setModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ExpenseModal;
