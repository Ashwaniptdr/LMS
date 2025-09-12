import { Link } from "react-router-dom"
import Card from "../../../Shared/Component/Common/Card"


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
          <Link to={"/auth/user/Register"} style={{ color: "blue", fontWeight: "bold" }}>
            Register here
          </Link>
        </p>
   </Card>
   </>
  )
}

export default Login