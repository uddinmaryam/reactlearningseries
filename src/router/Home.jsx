import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data); // data contains all inputs

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* "register" tracks the input */}
      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span className="error">Email is required!</span>}
      
      <input type="submit" />
    </form>
  );
}