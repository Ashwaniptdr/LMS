import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { post } from "../../../Shared/Apis";
import Card from "../../../Shared/Component/Common/Card";

type LoginForm = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit,  } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    const response = await post<string>("EmployeeLogin", data);
    
    if (response) {
      alert("Login successful!");
      navigate("/dashboard"); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Card title="Employee Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Login Form</legend>

          <label>Employee Email:</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          
          <br />

          <label>Employee Password:</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          
          <br />

          <button type="submit">Login</button>
        </fieldset>
      </form>

      <p style={{ marginTop: "15px" }}>
        New User?{" "}
        <Link to="/employeedashboard/home">Employee DashBoard</Link>
        <Link to="/auth/employee/Register" style={{ color: "blue", fontWeight: "bold" }}>
          Register here
        </Link>
      </p>
    </Card>
  );
}

export default Login;
