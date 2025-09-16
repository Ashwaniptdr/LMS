import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { post } from "../../../Shared/Apis";
import Card from "../../../Shared/Component/Common/Card";


interface LoginForm {
  email: string;
  password: string;

}

function Login() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    const response = await post<string>("UserLogin", data); 

    if (response) {
      alert("Login successful!");
      navigate("/user/dashboard"); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Card title="User Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Login Form</legend>

          <label>User Email:</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br />

          <label>User Password:</label>
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
         <Link to="/userdashboard/home">User Dashboard</Link>
        <Link to="/auth/user/Register" style={{ color: "blue", fontWeight: "bold" }}>
          Register here
        </Link>
      </p>
    </Card>
  );
}

export default Login;
