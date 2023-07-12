import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({
  id,
  firstName,
  lastName,
  prefix,
  postfix,
  title,
  pets,
  handleButtonClick,
}) => {
  let name = `${firstName} ${lastName}`;
  if (prefix) name = prefix + " " + name;
  if (postfix) name += `, ${postfix}`;

  return (
    <article className="employee">
      <h3>{name}</h3>
      <h4>{title}</h4>
      <button onClick={() => handleButtonClick(id)}>Show Pets</button>
      <PetList pets={pets} />
    </article>
  );
};

export default Employee;
