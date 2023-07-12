import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

console.log(import.meta.env.VITE_BASE_URL);

const App = () => {
  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};

export default App;
