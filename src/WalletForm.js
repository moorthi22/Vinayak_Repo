import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WalletForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="amount">Amount</Label>
        <Input
          type="text"
          id="amount"
          placeholder="enter amount"
          onChange={e => props.walletDetails(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="datePicker">Date</Label> <br />
        <DatePicker
          id="datePicker"
          selected={props.date}
          onChange={e => props.walletDetails(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="comments">Comments</Label>
        <Input
          type="textarea"
          id="comments"
          placeholder="enter comments"
          onChange={e => props.walletDetails(e)}
        />
      </FormGroup>
    </Form>
  );
}

export default WalletForm;
