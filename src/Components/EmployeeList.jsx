import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], petsByEmployeeId: {} };
  }

  componentDidMount() {
    const url = `${BASE_URL}/api/employees`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ employees: response });
      });
  }

  handleButtonClick = (employeeId) => {
    const url = `${BASE_URL}/api/pets?employeeId=${employeeId}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          petsByEmployeeId: {
            ...this.state.petsByEmployeeId,
            [employeeId]: response,
          },
        });
      });
  };

  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.employees.map((employee) => (
            <Employee
              key={employee.id}
              {...employee}
              pets={this.state.petsByEmployeeId[employee.id]}
              handleButtonClick={this.handleButtonClick}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
