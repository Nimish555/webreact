function Obj() {
  const value = {
    name: "fortuner",
    model: "suv",
    numb: " 68568",
  };

  return (
    <h1>
      The Car name is {value.name} of model {value.model} num
      {value.numb}
    </h1>
  );
}
export default Obj;
