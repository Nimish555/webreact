// import React  from 'react'
// import { useForm } from 'react-hook-form'

// function Form() {
//   const { register
//     , handleSubmit
//   , formState:{ errors }} = useForm();

//   function submitForm(data) {
//     console.log(data);
//   }
//   console.log("Render");
//   return (
//     <>
//       <form onSubmit={handleSubmit(submitForm)}>
//         <div>
//           <label htmlFor="first">Name : </label>
//           <input id="first" {...register("name",
//             { required : "Name is required"}
//           )} />
//           {errors.name && <span>{errors.name.message}</span>}
//         </div>

//         <div>
//           <label htmlFor="second">Age : </label>
//           <input id="second" {...register("age",
//             {
//               min: {
//                 value: 10,
//                 message : "Minimum Age should be 10"

//               },
//               max: {
//                 value: 30,
//                 message : "max age is 30"

//               }

//             }
//           )} />
//           {errors.age && <span>{errors.age.message}</span>}
//         </div>

//         <div>
//           <label htmlFor="third">Password : </label>
//           <input id="third" {...register("password")} />
//         </div>

//         <button>submit</button>
//       </form>
//     </>
//   );
// }

// export default Form;

// import UseEffect from "./useeffect";

// function App() {
//   return (
//     <>
//       <UseEffect />
//     </>
//   );
// }

// export default App;

import React from "react";

import Login from "./Login.jsx";
import UseEffect from "./UseEffect.jsx";

function App() {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Login />;
  }

  return <UseEffect />;
}

export default App;