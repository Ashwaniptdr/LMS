import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { post } from "../../../Shared/Apis";
import Card from "../../../Shared/Component/Common/Card";

interface RegisterForm {
  name: string;
  phone: string;
  email: string;
  password: string;
  memberType: "Standard" | "Premium";
}

function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterForm) => {
    const response = await post<string>("UserRegister", data); 
    if (response) {
      alert("Registration successful!");
      navigate("/auth/user/Login"); 
    } else {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <Card title="User Register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>User Registration Form</legend>

          <label>User Name:</label>
          <input type="text" placeholder="Name" {...register("name")} /><br />

          <label>User Phone:</label>
          <input type="tel" placeholder="Phone" {...register("phone")} /><br />

          <label>User Email:</label>
          <input type="email" placeholder="Email" {...register("email")} /><br />

          <label>Member Type:</label>
          <select {...register("memberType")}>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select><br />

          <label>User Password:</label>
          <input type="password" placeholder="Password" {...register("password")} /><br />

          <button type="submit">Register</button>
        </fieldset>
      </form>
    </Card>
  );
}

export default Register;
