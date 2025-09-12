
import { Link } from 'react-router-dom'
import Card from '../../../Shared/Component/Common/Card'

function Login() {
  return (
   <>
      <Card title={"Employee Login "} >
   
       <form>
           <fieldset>
             <legend>Form</legend>
             <label>Employee Email : </label>
             <input type="Email"  placeholder="Email"  required/><br></br>
             <label>Employee Password : </label>
             <input type="Password"  placeholder="Password" required /><br></br>
             <button type="submit">Login</button>
           </fieldset>
         </form>

          <p style={{ marginTop: "15px" }}>
          New User?{" "}
          <Link to={"/auth/employee/Register"} style={{ color: "blue", fontWeight: "bold" }}>
            Register here
          </Link>
        </p>
      </Card>
      </>
  )
}

export default Login