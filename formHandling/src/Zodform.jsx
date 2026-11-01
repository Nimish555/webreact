 
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z
    .string()
    .min(3, "min length should be three")
    .max(20, "max length should be twenty"),

  age: z.coerce.number().min(10, "min age is 10").max(40, "max age is 40 "),
  password: z.string().min(3, "min length is 3").max(10, "max length is 10"),
  email: z.string().email("email is invalid"),
});

function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(Schema) });

  function submitForm(data) { 
    console.log(data);
  }
  console.log("Render");
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name : </label>
          <input
            id="first"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="second">Age : </label>
          <input id="second" {...register("age")} />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label htmlFor="third">Password : </label>
          <input id="third" {...register("password")} />
        </div>

        <div>
          <label htmlFor="fourth">Email : </label>
          <input id="fourth" type="email" {...register("email")} />
        </div>

        <div>
          <label htmlFor="sixth"> decription : </label>
          <input id=" sixth" {...register("decrip")} />
        </div>

        <button>submit</button>
      </form>
    </>
  );
}

export default ZodForm;
