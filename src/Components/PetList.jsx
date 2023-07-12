export const PetList = ({ pets }) => {
  if (!pets) return null;

  return (
    <aside className="pets-list">
      {pets.length ? (
        <p>{pets.map(({ name }) => name).join(", ")}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
