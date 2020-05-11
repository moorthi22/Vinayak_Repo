import React from "react";
import { Container, Table } from "reactstrap";

const walletData = [
  {
    SNo: 1,
    Date: new Date(),
    Description: "Salary",
    Amount: 40000,
    Summary: "Income via salary"
  },
  {
    SNo: 2,
    Date: new Date(),
    Description: "Expense",
    Amount: 20000,
    Summary: "expense for shopping"
  }
];

const data = walletData.map(item => (
  <tr key={item.SNo}>
    <td>{item.SNo}</td>
    <td>{item.Date.toDateString()}</td>
    <td>{item.Description}</td>
    <td>{item.Amount}</td>
    <td>{item.Summary}</td>
    <td>
      <i className="fa fa-pencil" aria-hidden="true" />
    </td>
  </tr>
));

function WalletList() {
  return (
    <Container fluid>
      <Table striped>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Summary</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </Table>
    </Container>
  );
}

export default WalletList;
