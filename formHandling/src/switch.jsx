function Switch() {
  let day = 2;
  function daySwitch() {
    switch (day) {
      case 1:
        return {
          name: "monday",
          id: 1
        }
  
      case 2:
        return {
          name: "tues",
          id: 2,
        }
  

      default:
        return {
          name: "invalid",
          id: 0,
        };
    }
  }

  const result = daySwitch();

  return (
    <>
      <h1>The Day </h1>
      <h2>name is : {result.name}</h2>
      <h2>id is : {result.id}</h2>
    </>
  )
}
export default Switch;