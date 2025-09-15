import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { post } from "../../../Shared/Apis";
import Card from "../../../Shared/Component/Common/Card";

<<<<<<< HEAD

function Login() {
  return (
  <>
   <Card title={"User Login"} >

    <form>
        <fieldset>
          <legend>Form</legend>
          <label>User Email : </label>
          <input type="Email"  placeholder="Email"  required/><br></br>
          <label>User Password : </label>
          <input type="Password"  placeholder="Password" required /><br></br>
          <button type="submit">Login </button>
        </fieldset>
      </form>
      <p style={{ marginTop: "15px" }}>
          New User?{" "}
          <Link
            to="/user/home"
            style={{ color: "green", fontWeight: "bold" }}
          >
            Go to User Dashboard (Test)
          </Link>
          <Link to={"/auth/user/Register"} style={{ color: "blue", fontWeight: "bold" }}>
            Register here
          </Link>
          
        </p>
   </Card>
   </>
  )
=======
interface LoginForm {
  email: string;
  password: string;
>>>>>>> f7fd5c66dd7ddaed6c636c36452b1fd6ec62eb13
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
        <Link to="/auth/user/Register" style={{ color: "blue", fontWeight: "bold" }}>
          Register here
        </Link>
      </p>
    </Card>
  );
}

export default Login;
