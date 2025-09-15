import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { post } from "../../../Shared/Apis";
import Card from '../../../Shared/Component/Common/Card';

type RegisterForm = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterForm) => {
    const response = await post<string>("EmployeeRegister", data);
    
    if (response) {
      alert("Registration successful!");
      navigate("/auth/employee/Login"); // redirect to login after register
    } else {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <>
      <Card title="Employee Register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Form</legend>

            <label>Employee Name:</label>
            <input type="text" placeholder="Name" {...register("name")} /><br />

            <label>Employee Phone:</label>
            <input type="text" placeholder="Phone" {...register("phone")} /><br />

            <label>Employee Email:</label>
            <input type="email" placeholder="Email" {...register("email")} /><br />

            <label>Employee Password:</label>
            <input type="password" placeholder="Password" {...register("password")} /><br />

            <button type="submit">Register</button>
          </fieldset>
        </form>
      </Card>
    </>
  );
}

export default Register;
